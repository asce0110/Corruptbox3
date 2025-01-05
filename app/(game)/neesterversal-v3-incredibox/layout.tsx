import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neesterversal V3 Incredibox - Advanced Music Creation',
  description: 'Experience Neesterversal V3 Incredibox, the latest version with advanced features. Create complex music and explore new sound possibilities.',
  openGraph: {
    title: 'Neesterversal V3 Incredibox - Advanced Music Creation',
    description: 'Experience Neesterversal V3 Incredibox, the latest version with advanced features. Create complex music and explore new sound possibilities.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 