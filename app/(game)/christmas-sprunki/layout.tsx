import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Christmas Sprunki - Holiday Music Game',
  description: 'Create festive music with Christmas Sprunki. A special holiday edition featuring Christmas sounds and seasonal beats.',
  openGraph: {
    title: 'Christmas Sprunki - Holiday Music Game',
    description: 'Create festive music with Christmas Sprunki. A special holiday edition featuring Christmas sounds and seasonal beats.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 