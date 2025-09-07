// lib/rss.ts
import Parser from 'rss-parser'

// We import the whole overrides module so this file works
// even if you haven't defined episodeLinkOverride yet.
import * as overrides from './overrides'

export type Episode = {
  id: string
  title: string
  date: string
  audioUrl?: string
  link?: string
  image?: string
  description?: string
  spotifyUrl?: string
  duration?: string
}

const episodeImageOverride: Record<string, string> =
  (overrides as any).episodeImageOverride || {}

const episodeLinkOverride: Record<string, string> =
  (overrides as any).episodeLinkOverride || {}

/**
 * rss-parser with a few iTunes/media custom fields.
 */
const parser = new Parser({
  customFields: {
    item: [
      ['itunes:image', 'itunesImage', { keepArray: false }],
      ['itunes:duration', 'itunesDuration', { keepArray: false }],
      ['media:thumbnail', 'mediaThumbnail', { keepArray: false }],
      ['media:content', 'mediaContent', { keepArray: false }],
    ],
  },
})

/**
 * Fetch and normalize podcast episodes from the RSS feed.
 */
export async function fetchEpisodes(): Promise<Episode[]> {
  const rss = process.env.PODCAST_RSS
  if (!rss) return []

  const feed = await parser.parseURL(rss)

  const items = (feed.items || []).map((it, idx) => {
    const id = it.guid || String(idx)

    // Choose the best available image field (do NOT fall back to audio URL)
    const imageCandidate =
      (it as any).itunesImage?.href ||
      (it as any).image?.url ||
      (it as any).mediaThumbnail?.url ||
      (it as any).mediaContent?.url ||
      undefined

    // If RSS <link> is a Spotify *episode* URL, keep it
    const rawLink = it.link || ''
    const spotifyFromLink = /open\.spotify\.com\/episode\//.test(rawLink)
      ? rawLink
      : undefined

    // Allow manual overrides by GUID (optional).
    const spotifyFromOverride = episodeLinkOverride[id]

    return {
      id,
      title: it.title || 'Untitled Episode',
      date: it.isoDate || it.pubDate || '',
      audioUrl: it.enclosure?.url,
      link: rawLink,
      image: imageCandidate,
      description: it.contentSnippet || it.content || '',
      duration: (it as any).itunesDuration,
      spotifyUrl: spotifyFromOverride || spotifyFromLink,
    } as Episode
  })

  // Apply custom image overrides + safe fallback
  return items.map((ep) => ({
    ...ep,
    image: episodeImageOverride[ep.id] ?? ep.image ?? '/hero.jpg',
  }))
}
