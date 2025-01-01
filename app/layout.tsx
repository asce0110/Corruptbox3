import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RootProvider } from '@/components/providers/root-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corruptbox 3 - Revolutionary Music Creation Gaming Experience',
  description: 'Play Corruptbox 3, the ultimate music creation game. Create amazing beats, mix unique sounds, and enjoy an immersive musical gaming experience. Join the Corruptbox 3 community today!',
  icons: {
    icon: [
      {
        url: 'https://s.incrediboxsprunkimod.com/public/favicon.ico',
        sizes: 'any',
      },
      {
        url: 'https://s.incrediboxsprunkimod.com/public/favicon-96x96.png',
        type: 'image/png',
        sizes: '96x96',
      },
      {
        url: 'https://s.incrediboxsprunkimod.com/public/web-app-manifest-192x192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: 'https://s.incrediboxsprunkimod.com/public/web-app-manifest-512x512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: 'https://s.incrediboxsprunkimod.com/public/apple-touch-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#2EE59D',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Corruptbox 3',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}