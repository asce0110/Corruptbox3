import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Incredibox Sprunki Mod - Modified Music Game',
  description: 'Play Incredibox Sprunki Mod, featuring custom sounds and new features. Create unique music with this modified version of the classic game.',
  openGraph: {
    title: 'Incredibox Sprunki Mod - Modified Music Game',
    description: 'Play Incredibox Sprunki Mod, featuring custom sounds and new features. Create unique music with this modified version of the classic game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 