import type { ComponentType } from 'react'
import Figure from './Figure'
import Callout from './Callout'
import SpotifyEpisode from './SpotifyEpisode'

export const mdxComponents: Record<string, ComponentType<any>> = {
  Figure,
  Callout,
  SpotifyEpisode,
}
