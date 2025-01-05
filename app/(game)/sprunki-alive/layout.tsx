import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprunki Alive - Dynamic Music Creation Game',
  description: 'Experience Sprunki Alive, where music comes to life. Create dynamic beats and interactive sounds in this energetic version of the music game.',
  openGraph: {
    title: 'Sprunki Alive - Dynamic Music Creation Game',
    description: 'Experience Sprunki Alive, where music comes to life. Create dynamic beats and interactive sounds in this energetic version of the music game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 