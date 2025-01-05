import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sprunki Modded - Enhanced Music Creation Game',
  description: 'Experience Sprunki Modded with enhanced features and new sounds. Create unique music with this modified version of the popular music creation game.',
  openGraph: {
    title: 'Sprunki Modded - Enhanced Music Creation Game',
    description: 'Experience Sprunki Modded with enhanced features and new sounds. Create unique music with this modified version of the popular music creation game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 