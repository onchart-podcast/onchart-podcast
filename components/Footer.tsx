import Link from 'next/link'
import { Instagram, Linkedin, Facebook } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'
import { SiTiktok, SiSubstack } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-neutral-50/80 text-neutral-700">
      {/* Top grid */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 grid gap-10 md:grid-cols-12 items-start">
        {/* Brand + socials */}
        <div className="md:col-span-4">
          <div className="text-4xl font-black leading-none tracking-tight">
            <div>ON Chart</div>
            <div>Podcast</div>
          </div>

          <hr className="my-6 border-neutral-300" />

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 transition"
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href={process.env.NEXT_PUBLIC_X_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 transition"
            >
              <FaXTwitter className="h-5 w-5" />
            </a>

            <a
              href={process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 transition"
            >
              <Facebook className="h-5 w-5" />
            </a>

            {/* FIX: Substack icon links to external Substack again */}
            <a
              href={process.env.NEXT_PUBLIC_SUBSTACK_URL || 'https://onchartpodcast.substack.com'}
              target="_blank"
              rel="noreferrer"
              aria-label="Substack"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 transition"
            >
              <SiSubstack className="h-5 w-5" />
            </a>

            <a
              href={process.env.NEXT_PUBLIC_TIKTOK_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 transition"
            >
              <SiTiktok className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className="md:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900">Pages</h3>
          <div className="mt-2 h-[2px] w-12 bg-neutral-200" />
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-neutral-900">Home</Link></li>
            <li><Link href="/episodes" className="hover:text-neutral-900">Episodes</Link></li>
            {/* Stays anchored to the on-page form */}
            <li><Link href="/contact#newsletter" className="hover:text-neutral-900" prefetch={false}>Newsletter</Link></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="md:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900">Subscribe</h3>
          <div className="mt-2 h-[2px] w-12 bg-neutral-200" />
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={process.env.SPOTIFY_SHOW_URL || '#'} target="_blank" rel="noreferrer" className="hover:text-neutral-900">
                Spotify
              </a>
            </li>
            <li>
              <a href={process.env.APPLE_PODCAST_URL || '#'} target="_blank" rel="noreferrer" className="hover:text-neutral-900">
                Apple Podcast
              </a>
            </li>
            <li>
              <a href={process.env.YOUTUBE_URL || '#'} target="_blank" rel="noreferrer" className="hover:text-neutral-900">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900">About</h3>
          <div className="mt-2 h-[2px] w-12 bg-neutral-200" />
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about#mission" className="hover:text-neutral-900">Our Mission</Link></li>
            <li><Link href="/about#our-team" className="hover:text-neutral-900">Our Team</Link></li>
            <li><Link href="/contact" className="hover:text-neutral-900">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs md:text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} ON Chart Podcast. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-neutral-800">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-neutral-800">Terms of Use</Link>
            <Link href="/contact" className="hover:text-neutral-800">Contact Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
