// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { League_Gothic } from 'next/font/google'

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
      <body>
        <Nav />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
