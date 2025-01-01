import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corruptbox 3 - Revolutionary Music Creation Gaming Experience',
  description: 'Play Corruptbox 3, the ultimate music creation game. Create amazing beats, mix unique sounds, and enjoy an immersive musical gaming experience. Join the Corruptbox 3 community today!'
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 