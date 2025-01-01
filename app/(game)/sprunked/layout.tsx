import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import { RootProvider } from '@/components/providers/root-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Play Sprunked on Corruptbox 3 - Music Creation Gaming Platform',
  description: 'Experience Sprunked on Corruptbox 3, the ultimate music creation gaming platform. Create amazing beats and join the Corruptbox 3 community for an immersive musical experience.'
}

export default function SprunkedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-black text-white antialiased`}>
        <RootProvider>
          {children}
        </RootProvider>
      </body>
    </html>
  )
} 