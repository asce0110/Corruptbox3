import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corruptbox 3 - Revolutionary Music Creation Game',
  description: 'Create amazing beats and mix unique sounds in Corruptbox 3. Experience the ultimate music creation game with advanced features and intuitive controls.',
  openGraph: {
    title: 'Corruptbox 3 - Revolutionary Music Creation Game',
    description: 'Create amazing beats and mix unique sounds in Corruptbox 3. Experience the ultimate music creation game with advanced features and intuitive controls.',
    url: 'https://corruptbox3.com/corruptbox3',
    siteName: 'Corruptbox 3',
    type: 'website'
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 