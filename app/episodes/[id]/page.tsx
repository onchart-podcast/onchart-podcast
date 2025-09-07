// app/episodes/[id]/page.tsx
import { redirect, notFound } from 'next/navigation'
import { fetchEpisodes, type Episode } from '@/lib/rss'

/** Decide where an episode should link (prefer Spotify episode URL). */
function hrefForEpisode(ep: Episode): string | undefined {
  const href =
    ep.spotifyUrl?.trim() ||         // from overrides or RSS if present
    ep.link?.trim() ||               // generic RSS <link>
    process.env.SPOTIFY_SHOW_URL?.trim() || // show page as last resort
    ''

  return href || undefined
}

type Params = { params: { id: string } }

export default async function EpisodePage({ params }: Params) {
  const episodes = await fetchEpisodes()
  const ep = episodes.find(e => e.id === params.id)
  if (!ep) return notFound()

  // Auto-redirect to Spotify (or the best available link)
  const href = hrefForEpisode(ep)
  if (href) {
    redirect(href)
  }

  // Fallback (should rarely render)
  return (
    <main className="container py-12">
      <h1 className="text-3xl md:text-5xl font-bold">{ep.title}</h1>
      <p className="mt-4 text-neutral-600">No external link found for this episode.</p>
    </main>
  )
}
