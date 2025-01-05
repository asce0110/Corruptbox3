import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gray Sprunki - Minimalist Music Creation Game',
  description: 'Experience music creation with Gray Sprunki. A minimalist version of the popular music game featuring a unique grayscale aesthetic.',
  openGraph: {
    title: 'Gray Sprunki - Minimalist Music Creation Game',
    description: 'Experience music creation with Gray Sprunki. A minimalist version of the popular music game featuring a unique grayscale aesthetic.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 