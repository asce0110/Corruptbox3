import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cool As Ice - Chill Music Creation Game',
  description: 'Create chill beats with Cool As Ice. A relaxing music creation game featuring cool sounds and a laid-back atmosphere.',
  openGraph: {
    title: 'Cool As Ice - Chill Music Creation Game',
    description: 'Create chill beats with Cool As Ice. A relaxing music creation game featuring cool sounds and a laid-back atmosphere.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 