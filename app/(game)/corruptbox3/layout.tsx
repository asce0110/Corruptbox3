import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corruptbox 3 - Revolutionary Music Creation Game | Create & Mix Music Online',
  description: 'Create amazing beats and mix unique sounds in Corruptbox 3. Experience the ultimate music creation game with advanced features and intuitive controls. Free to play, no download required!',
  keywords: 'Corruptbox 3, music creation, online music game, beat maker, music production, free music game, browser music game',
  openGraph: {
    title: 'Corruptbox 3 - Revolutionary Music Creation Game',
    description: 'Create amazing beats and mix unique sounds in Corruptbox 3. Experience the ultimate music creation game with advanced features and intuitive controls.',
    url: 'https://corruptbox3.com/corruptbox3',
    siteName: 'Corruptbox 3',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/corruptbox3-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Corruptbox 3 Music Creation Game',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corruptbox 3 - Revolutionary Music Creation Game',
    description: 'Create amazing beats and mix unique sounds in Corruptbox 3. Experience the ultimate music creation game with advanced features and intuitive controls.',
    images: ['/corruptbox3-twitter.jpg'],
  },
  alternates: {
    canonical: 'https://corruptbox3.com/corruptbox3'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  other: {
    'application-name': 'Corruptbox 3',
    'msapplication-TileColor': '#2EE59D',
    'theme-color': '#2EE59D',
  }
}

// Add JSON-LD Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Corruptbox 3',
  description: 'Create amazing beats and mix unique sounds in Corruptbox 3. Experience the ultimate music creation game with advanced features and intuitive controls.',
  applicationCategory: 'Game',
  genre: 'Music Creation',
  url: 'https://corruptbox3.com/corruptbox3',
  image: 'https://corruptbox3.com/corruptbox3-og.jpg',
  screenshot: 'https://corruptbox3.com/corruptbox3-screenshot.jpg',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '2500',
    bestRating: '5',
    worstRating: '1'
  },
  author: {
    '@type': 'Organization',
    name: 'Sprunki Games',
    url: 'https://corruptbox3.com'
  },
  inLanguage: 'en-US',
  copyrightYear: new Date().getFullYear(),
  license: 'https://corruptbox3.com/terms'
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
} 