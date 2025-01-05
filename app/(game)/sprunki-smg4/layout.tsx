import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprunki SMG4 - Special Edition Music Game',
  description: 'Play the SMG4 special edition of Sprunki. Create unique music and beats with SMG4-themed sounds in this free online music creation game.',
  openGraph: {
    title: 'Sprunki SMG4 - Special Edition Music Game',
    description: 'Play the SMG4 special edition of Sprunki. Create unique music and beats with SMG4-themed sounds in this free online music creation game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 