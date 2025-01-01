import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Play Incredibox Sprunki Mod on Corruptbox 3 - Music Creation Gaming Platform',
  description: 'Experience Incredibox Sprunki Mod on Corruptbox 3, the ultimate music creation gaming platform. Create amazing beats and join the Corruptbox 3 community for an immersive musical experience.'
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}