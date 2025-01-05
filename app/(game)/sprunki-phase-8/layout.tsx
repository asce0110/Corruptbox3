import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprunki Phase 8 - Latest Version of Music Creation Game',
  description: 'Experience the newest version of Sprunki with Phase 8. Create music, mix beats, and discover new features in this free online music game.',
  openGraph: {
    title: 'Sprunki Phase 8 - Latest Version of Music Creation Game',
    description: 'Experience the newest version of Sprunki with Phase 8. Create music, mix beats, and discover new features in this free online music game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 