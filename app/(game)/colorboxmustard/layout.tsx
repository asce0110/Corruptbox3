import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colorbox Mustard - Vibrant Music Creation Game',
  description: 'Create colorful music with Colorbox Mustard. A vibrant version of the music game featuring unique sounds and a distinctive visual style.',
  openGraph: {
    title: 'Colorbox Mustard - Vibrant Music Creation Game',
    description: 'Create colorful music with Colorbox Mustard. A vibrant version of the music game featuring unique sounds and a distinctive visual style.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 