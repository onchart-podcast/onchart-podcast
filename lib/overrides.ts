// lib/overrides.ts

// Optional: per-episode image overrides (keep whatever you had)
export const episodeImageOverride: Record<string, string> = {
   '7927edc0-8f7e-4344-92fd-a94356a6454c': '/episode_images/tyler.png',
   '6bdba67b-34ca-46c8-ac73-3b7d832ae143': '/episode_images/andrew.png',
   '0133c3a8-4eb6-495c-b3e3-527bdb924551': '/episode_images/roshni.png',
   '8f86589a-8e7d-4afa-8d3d-4c42d173dcc6': '/episode_images/rachel.png',
   'd0558702-8919-40b3-83fb-b63f6a9950eb': '/episode_images/frank.png',
   'ec0e9ee1-d73d-4d80-97cc-6ea5f54b7590': '/episode_images/adam.png',
   '603d5da0-56b0-459e-8874-4bead40bcb9f': '/episode_images/andy.png',
   '37558316-20b9-4267-a7a5-5783d9857eb2': '/episode_images/irene.png',
   'c8e2b996-0c47-4329-9b80-08930077d39c': '/episode_images/michael.png',
   '288695ab-9bdf-4e3f-993a-26bb82e4bac8': '/episode_images/jon.png',
   'a7b65795-4287-4ae0-9d4c-eee82720648f': '/episode_images/jordan.png',
   '8c3c167e-ff84-48a5-9e45-16cc2d5adda9': '/episode_images/juliet.png',
   'afaf203a-3072-4c3e-8354-cff04393386e': '/episode_images/tummala.png',
   'd2812b5a-b339-4501-b8a3-3a4c6005e8e9': '/episode_images/alex.png'


};

/**
 * Per-episode link overrides → point specific GUIDs to public Spotify episode URLs.
 * Add all your GUID→URL pairs inside THIS single object.
 */
export const episodeLinkOverride: Record<string, string> = {
  // Tyler Beauchamp
  '7927edc0-8f7e-4344-92fd-a94356a6454c': 'https://open.spotify.com/episode/14Lx1dVzuGpJuwcoDBZAdm',

  // Andrew Lam
  '6bdba67b-34ca-46c8-ac73-3b7d832ae143': 'https://open.spotify.com/episode/75g5dNJa0F98TiE1JXt5fw',

  // Roshni Shah
  '0133c3a8-4eb6-495c-b3e3-527bdb924551': 'https://open.spotify.com/episode/4Thwe1IXsf0e0MJ47OJ26e',

  // Rachel Kowalsky 
  '8f86589a-8e7d-4afa-8d3d-4c42d173dcc6': 'https://open.spotify.com/episode/625BI0PTOvwKuQDqiwYNd7',

  // Frank Clark
  'd0558702-8919-40b3-83fb-b63f6a9950eb': 'https://open.spotify.com/episode/05sH9w096fN4CefGoRbePc',

  // Adam Rodman 
  'ec0e9ee1-d73d-4d80-97cc-6ea5f54b7590': 'https://open.spotify.com/episode/4dGPbiQJhO10nPW5Q35I4d',

  // Andy Nguyen
  '603d5da0-56b0-459e-8874-4bead40bcb9f': 'https://open.spotify.com/episode/3L44oc4bwhgcVA8h3vQVv7',

  // Irene Mathieu
  '37558316-20b9-4267-a7a5-5783d9857eb2': 'https://open.spotify.com/episode/342oxyTMfbu5HnGnrVb2L1', 

  // Michael Stein
  'c8e2b996-0c47-4329-9b80-08930077d39c': 'https://open.spotify.com/episode/4aeer2QxxeXsOrj63Gl42Z',

  // Jon Hallberg
  '288695ab-9bdf-4e3f-993a-26bb82e4bac8': 'https://open.spotify.com/episode/50qcor6GaHslUYyyE8KERb',

  // Jordan Baechler
  'a7b65795-4287-4ae0-9d4c-eee82720648f': 'https://open.spotify.com/episode/1U8K5wFDK2NgYW9HY1gPcZ',

  // Juliet King
  '8c3c167e-ff84-48a5-9e45-16cc2d5adda9': 'https://open.spotify.com/episode/5acsXYrjONWRfq6cq1z11J', 

  // Tummala
  'afaf203a-3072-4c3e-8354-cff04393386e': 'https://open.spotify.com/episode/6Pqk7B5wok8Qj054jy08eD',

  // Alex
  'd2812b5a-b339-4501-b8a3-3a4c6005e8e9': 'https://open.spotify.com/episode/0MqmSDluV5CCIK66EF6Zc4'
};
