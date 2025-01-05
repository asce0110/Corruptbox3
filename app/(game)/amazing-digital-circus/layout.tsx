import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Amazing Digital Circus x Sprunki - Music Creation Game',
  description: 'Join the Amazing Digital Circus with this special Sprunki edition. Create circus-themed music and enjoy unique sounds in this free online game.',
  openGraph: {
    title: 'Amazing Digital Circus x Sprunki - Music Creation Game',
    description: 'Join the Amazing Digital Circus with this special Sprunki edition. Create circus-themed music and enjoy unique sounds in this free online game.'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 