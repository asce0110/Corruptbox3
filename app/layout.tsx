import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RootProvider } from '@/components/providers/root-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Corruptbox 3 - Revolutionary Music Creation Gaming Experience',
  description: 'Play Corruptbox 3, the ultimate music creation game. Create amazing beats, mix unique sounds, and enjoy an immersive musical gaming experience. Join the Corruptbox 3 community today!',
  icons: {
    shortcut: 'https://s.incrediboxsprunkimod.com/public/favicon.ico',
    icon: 'https://s.incrediboxsprunkimod.com/public/favicon-96x96.png',
    apple: 'https://s.incrediboxsprunkimod.com/public/apple-touch-icon.png',
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
      <head>
        <link rel="icon" type="image/x-icon" href="https://s.incrediboxsprunkimod.com/public/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="https://s.incrediboxsprunkimod.com/public/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://s.incrediboxsprunkimod.com/public/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}