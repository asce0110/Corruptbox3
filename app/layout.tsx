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
  description: 'Create amazing beats and mix unique sounds in Sprunki Corruptbox 3. A free online music creation game that lets you produce music easily. Start creating now!',
  metadataBase: new URL('https://corruptbox3.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sprunki Corruptbox 3 - Music Creation Game',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprunki Corruptbox 3 - Free Online Music Creation Game',
    description: 'Create amazing beats and mix unique sounds in Sprunki Corruptbox 3. A free online music creation game that makes music production fun and accessible.',
    images: ['/twitter-image.jpg'],
    creator: '@SprunckiGames',
    site: '@SprunckiGames',
  },
  verification: {
    google: 'your-google-site-verification',
  },
  category: 'Music Creation Game'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script defer data-domain="corruptbox3.com" src="https://plausible.io/js/script.js"></script>
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