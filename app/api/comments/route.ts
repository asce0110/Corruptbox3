import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { headers } from 'next/headers'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const REPO_OWNER = 'asce0110'
const REPO_NAME = 'incredibox-comments'
const ISSUE_NUMBER = '3'

async function getLocationFromIP(ip: string) {
  try {
    const response = await fetch(`http://ip-api.com/json/${ip}`)
    const data = await response.json()
    if (data.status === 'success') {
      return `${data.country}, ${data.regionName}`
    }
    return 'Unknown Location'
  } catch (error) {
    console.error('Error getting location:', error)
    return 'Unknown Location'
  }
}

async function fetchComments() {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}/comments`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    if (!response.ok) {
      throw new Error('Failed to fetch comments from GitHub')
    }
    const comments = await response.json()
    return comments.map((comment: any) => {
      const content = comment.body
      const metaMatch = content.match(/<!--\s*META:\s*({.*?})\s*-->/)
      let meta = { likes: 0, shares: 0, likedBy: [] }
      if (metaMatch) {
        try {
          meta = JSON.parse(metaMatch[1])
        } catch (e) {
          console.error('Failed to parse meta data:', e)
        }
      }
      
      return {
        id: comment.id.toString(),
        content: content.replace(/<!--\s*META:\s*{.*?}\s*-->/, '').trim(),
        createdAt: comment.created_at,
        user: {
          name: comment.user.login,
          image: comment.user.avatar_url
        },
        location: 'GitHub',
        likes: meta.likes,
        shares: meta.shares,
        likedBy: meta.likedBy
      }
    })
  } catch (error) {
    console.error('Error fetching comments:', error)
    return []
  }
}

async function createComment(content: string, user: any) {
  try {
    const commentWithMeta = `${content}\n\n<!-- META: {"likes":0,"shares":0,"likedBy":[]} -->`
    
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/${ISSUE_NUMBER}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body: commentWithMeta })
    })
    if (!response.ok) {
      throw new Error('Failed to create comment on GitHub')
    }
    const comment = await response.json()
    return {
      id: comment.id.toString(),
      content: content,
      createdAt: comment.created_at,
      user: {
        name: user.name || 'Anonymous',
        image: user.image || 'https://github.com/ghost.png'
      },
      location: 'GitHub',
      likes: 0,
      shares: 0,
      likedBy: []
    }
  } catch (error) {
    console.error('Error creating comment:', error)
    throw error
  }
}

async function updateComment(commentId: string, content: string, meta: any) {
  try {
    const commentWithMeta = `${content}\n\n<!-- META: ${JSON.stringify(meta)} -->`
    const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues/comments/${commentId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ body: commentWithMeta })
    })
    if (!response.ok) {
      throw new Error('Failed to update comment on GitHub')
    }
    return response.json()
  } catch (error) {
    console.error('Error updating comment:', error)
    throw error
  }
}

export async function GET() {
  try {
    const comments = await fetchComments()
    return NextResponse.json(comments)
  } catch (error) {
    console.error('Error in GET:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const { content } = await request.json()
    const newComment = await createComment(content, session.user)
    return NextResponse.json(newComment)
  } catch (error) {
    console.error('Error in POST:', error)
    return new NextResponse(error instanceof Error ? error.message : 'Internal Server Error', { status: 500 })
  }
}

export async function PUT(request: Request) {
  const session = await getServerSession()
  if (!session?.user) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { commentId, action } = await request.json()
    const comments = await fetchComments()
    const comment = comments.find((c: { id: string }) => c.id === commentId)
    if (!comment) {
      return new NextResponse('Comment not found', { status: 404 })
    }

    const meta = {
      likes: comment.likes,
      shares: comment.shares,
      likedBy: comment.likedBy || []
    }

    if (action === 'like') {
      const userEmail = session.user.email || ''
      const userHasLiked = meta.likedBy.includes(userEmail)
      if (userHasLiked) {
        meta.likes -= 1
        meta.likedBy = meta.likedBy.filter((email: string) => email !== userEmail)
      } else {
        meta.likes += 1
        meta.likedBy.push(userEmail)
      }
    } else if (action === 'share') {
      meta.shares += 1
    }

    await updateComment(commentId, comment.content, meta)
    return NextResponse.json({
      ...comment,
      likes: meta.likes,
      shares: meta.shares,
      likedBy: meta.likedBy
    })
  } catch (error) {
    console.error('Error in PUT:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 