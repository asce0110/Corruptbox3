import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprunki Brud - Alternative Music Creation Game',
  description: 'Try Sprunki Brud, an alternative take on the music creation game. Mix unique beats and create original sounds in this special edition.',
  openGraph: {
    title: 'Sprunki Brud - Alternative Music Creation Game',
    description: 'Try Sprunki Brud, an alternative take on the music creation game. Mix unique beats and create original sounds in this special edition.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 