type SpotifyEpisodeProps = {
  id: string
  theme?: 'light' | 'dark'
}

export default function SpotifyEpisode({ id, theme = 'dark' }: SpotifyEpisodeProps) {
  const src = `https://open.spotify.com/embed/episode/${id}?utm_source=generator&theme=${theme}`

  return (
    <div className="my-10 overflow-hidden rounded-3xl border border-neutral-200 shadow-lg">
      <iframe
        title="Spotify episode player"
        src={src}
        width="100%"
        height="232"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="block w-full"
      />
    </div>
  )
}
