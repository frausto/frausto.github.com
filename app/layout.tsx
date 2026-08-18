import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import Script from 'next/script'
import { absoluteUrl, author, feedAlternates, ogImage, site, siteUrl } from '@/lib/site'
import './globals.css'

const GA_MEASUREMENT_ID = 'G-YXBKRPVF4V'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  // Social crawlers need absolute URLs; this makes Next resolve the generated
  // opengraph-image files against the live domain.
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    // Post pages set just their own title and get the site name appended.
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: author.name, url: absoluteUrl('/') }],
  creator: author.name,
  publisher: author.name,
  applicationName: site.name,
  alternates: {
    canonical: '/',
    types: feedAlternates(),
  },
  // Let crawlers show full-size previews and untruncated snippets.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: '/',
    locale: site.locale,
    title: site.title,
    description: site.description,
    images: ogImage('/'),
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ogImage('/'),
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafbfc' },
    { media: '(prefers-color-scheme: dark)', color: '#12161d' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={site.language}
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
