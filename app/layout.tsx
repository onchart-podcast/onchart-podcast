// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { League_Gothic } from 'next/font/google'
import Script from 'next/script'

const leagueGothic = League_Gothic({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-condensed',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ON Chart podcast',
  description:
    'Conversations at the intersection of medicine, creativity, and humanism.',
  openGraph: {
    title: 'ON Chart podcast',
    description:
      'Conversations at the intersection of medicine, creativity, and humanism.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={leagueGothic.variable}>
      <head>
        {/* Optional: AdSense meta tag (some accounts offer this alt verification) */}
        <meta name="google-adsense-account" content="ca-pub-1755060196030370" />

        {/* Google AdSense loader (global) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1755060196030370"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Nav />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
