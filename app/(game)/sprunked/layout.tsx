import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprunked - Original Music Creation Game',
  description: 'Play Sprunked, the original music creation experience. Mix beats and create unique sounds in this classic version of the popular music game.',
  openGraph: {
    title: 'Sprunked - Original Music Creation Game',
    description: 'Play Sprunked, the original music creation experience. Mix beats and create unique sounds in this classic version of the popular music game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 