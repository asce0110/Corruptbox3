import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { headers } from 'next/headers'
import fs from 'fs'
import path from 'path'

const COMMENTS_FILE = path.join(process.cwd(), 'data', 'comments.json')

// 确保 data 目录和 comments.json 文件存在
try {
  if (!fs.existsSync(path.dirname(COMMENTS_FILE))) {
    fs.mkdirSync(path.dirname(COMMENTS_FILE), { recursive: true })
  }
  if (!fs.existsSync(COMMENTS_FILE)) {
    fs.writeFileSync(COMMENTS_FILE, '[]', 'utf-8')
  }
} catch (error) {
  console.error('初始化评论文件失败:', error)
}

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
    console.log('正在读取评论文件...')
    const content = fs.readFileSync(COMMENTS_FILE, 'utf-8')
    console.log('读取到的原始内容:', content)
    return JSON.parse(content || '[]')
  } catch (error) {
    console.error('读取评论文件失败:', error)
    return []
  }
}

async function saveComments(comments: any[]) {
  try {
    fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2), 'utf-8')
    return true
  } catch (error) {
    console.error('Error saving comments:', error)
    return false
  }
}

export async function GET() {
  try {
    console.log('收到GET请求')
    const comments = await fetchComments()
    console.log('返回评论数据:', comments)
    return NextResponse.json(comments)
  } catch (error) {
    console.error('GET请求处理失败:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession()
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    const headersList = headers()
    const ip = headersList.get('x-forwarded-for') || ''
    const location = await getLocationFromIP(ip)

    const { content } = await request.json()
    const comments = await fetchComments()

    const newComment = {
      id: Date.now().toString(),
      content,
      createdAt: new Date().toISOString(),
      user: {
        name: session.user.name || 'Anonymous',
        image: session.user.image || 'https://github.com/ghost.png'
      },
      location,
      likes: 0,
      shares: 0,
      likedBy: []
    }

    comments.unshift(newComment)
    await saveComments(comments)

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

    if (action === 'like') {
      const userHasLiked = comment.likedBy.includes(session.user.email || '')
      if (userHasLiked) {
        comment.likes -= 1
        comment.likedBy = comment.likedBy.filter((email: string) => email !== session.user?.email)
      } else {
        comment.likes += 1
        comment.likedBy.push(session.user.email || '')
      }
    } else if (action === 'share') {
      comment.shares += 1
    }

    await saveComments(comments)
    return NextResponse.json(comment)
  } catch (error) {
    console.error('Error in PUT:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
} 