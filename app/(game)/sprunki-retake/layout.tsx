import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprunki Retake - Reimagined Music Creation Game',
  description: 'Play Sprunki Retake, a reimagined version of the classic music game. Create fresh beats with new sounds and features in this free online game.',
  openGraph: {
    title: 'Sprunki Retake - Reimagined Music Creation Game',
    description: 'Play Sprunki Retake, a reimagined version of the classic music game. Create fresh beats with new sounds and features in this free online game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 