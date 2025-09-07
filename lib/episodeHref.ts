// lib/episodeHref.ts
import type { Episode } from '@/lib/rss'

/** Decide where an episode should link. */
export function episodeHref(ep: Episode): string | undefined {
  const href =
    ep.spotifyUrl?.trim() ||
    ep.link?.trim() ||
    process.env.SPOTIFY_SHOW_URL?.trim() ||
    ''

  return href || undefined
}
