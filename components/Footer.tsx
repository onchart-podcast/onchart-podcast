import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-16 border-t">
      <div className="container grid gap-6 py-8 sm:grid-cols-3 text-sm text-neutral-600">
        <div>
          <p className="font-semibold">Subscribe</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <a
              className="btn btn-primary"
              href={process.env.SPOTIFY_SHOW_URL || '#'}
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
            <a
              className="btn border"
              href={process.env.APPLE_PODCAST_URL || '#'}
              target="_blank"
              rel="noreferrer"
            >
              Apple
            </a>
            <a
              className="btn border"
              href={process.env.YOUTUBE_URL || '#'}
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
            <a
              className="btn border"
              href={process.env.PODCAST_RSS ? '/rss.xml' : '#'}
              target="_blank"
              rel="noreferrer"
            >
              RSS
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold">About</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/about">Our Mission</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/press">Press Kit</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Newsletter</p>
          <form action="/api/subscribe" method="post" className="mt-2 flex gap-2">
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full rounded border px-3 py-2"
            />
            <button className="btn btn-primary">Join</button>
          </form>
          <p className="mt-2 text-xs">We’ll only email when there’s a new episode.</p>
        </div>
      </div>
    </footer>
  )
}

