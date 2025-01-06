import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { RootProvider } from '@/components/providers/root-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Sprunki Corruptbox 3 - Free Online Music Creation Game',
    template: '%s | Sprunki Corruptbox 3'
  },
  description: 'Create amazing beats and mix unique sounds in Sprunki Corruptbox 3. A free online music creation game that makes music production fun and accessible.',
  metadataBase: new URL('https://corruptbox3.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    shortcut: '/favicon.ico',
    icon: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  themeColor: '#2EE59D',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sprunki Corruptbox 3',
  },
  openGraph: {
    title: 'Sprunki Corruptbox 3 - Free Online Music Creation Game',
    description: 'Create amazing beats and mix unique sounds in Sprunki Corruptbox 3. A free online music creation game that makes music production fun and accessible.',
    url: 'https://corruptbox3.com',
    siteName: 'Sprunki Corruptbox 3',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprunki Corruptbox 3 - Free Online Music Creation Game',
    description: 'Create amazing beats and mix unique sounds in Sprunki Corruptbox 3. A free online music creation game that makes music production fun and accessible.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}