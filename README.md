# Podcast Site Starter (Next.js + Tailwind)

A clean, fast website for your podcast with episodes auto-imported from your RSS feed and optional Spotify embeds.

## Quickstart

```bash
pnpm i   # or npm i / yarn
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000

## Environment

- `PODCAST_RSS` — your podcast RSS feed (from your host like Buzzsprout, Libsyn, Spotify for Podcasters, Transistor, etc.).
- `SPOTIFY_SHOW_URL` — your Spotify show URL (optional).

## Notes

- Episodes are parsed at build time. Update the RSS and rebuild to pull new episodes.
- On episode pages, if `SPOTIFY_SHOW_URL` is set, the page attempts a Spotify embed using the episode `id`. If your RSS GUIDs are not Spotify IDs, replace the embed with a show-level player or store per-episode Spotify URLs in a CMS.
- Newsletter/contact APIs are stubs — wire them to Buttondown/Mailchimp and your email/CRM.
