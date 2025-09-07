// components/EpisodeCard.tsx
'use client'

import Image from 'next/image'
import type { Episode } from '@/lib/rss'

export default function EpisodeCard({ ep }: { ep: Episode }) {
  // Link priority: per-episode Spotify → RSS link → show-level Spotify → (none)
  const href =
    ep.spotifyUrl?.trim() ||
    ep.link?.trim() ||
    process.env.SPOTIFY_SHOW_URL?.trim() ||
    ''

  const handleClick: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement> = (e) => {
    if (!href) return
    // Prevent any parent navigation and force a new tab
    e.preventDefault()
    window.open(href, '_blank', 'noopener')
  }

  // If we have a target URL, render the whole card as a clickable <a>.
  // Otherwise, render a non-clickable <div>.
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    href ? (
      <a
        href={href}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        {children}
      </a>
    ) : (
      <div className="block cursor-not-allowed opacity-75">{children}</div>
    )

  return (
    <article className="card group overflow-hidden">
      <Wrapper>
        <div className="relative aspect-[16/9] bg-neutral-100">
          <Image
            src={ep.image || '/hero.jpg'}
            alt={ep.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold leading-snug group-hover:underline">
            {ep.title}
          </h3>

          {ep.description && (
            <p className="text-sm text-neutral-600 line-clamp-3">{ep.description}</p>
          )}

          {ep.date && (
            <p className="text-xs text-neutral-500">
              {new Date(ep.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          )}
        </div>
      </Wrapper>
    </article>
  )
}
