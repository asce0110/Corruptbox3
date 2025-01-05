import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprunki Christmas - Holiday Music Creation Game',
  description: 'Create festive music with Sprunki Christmas Edition. Mix holiday beats and sounds in this special Christmas version of the popular music game.',
  openGraph: {
    title: 'Sprunki Christmas - Holiday Music Creation Game',
    description: 'Create festive music with Sprunki Christmas Edition. Mix holiday beats and sounds in this special Christmas version of the popular music game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 