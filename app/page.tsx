// app/page.tsx
import Link from 'next/link'
import { fetchEpisodes } from '@/lib/rss'
import Polaroid from '@/components/Polaroid'
import AnimatedWords from '@/components/AnimatedWords'
import HeroButtons from "@/components/HeroButtons"

// Use League Gothic with next/font (no CSS @import needed)
import { League_Gothic } from 'next/font/google'
const leagueGothic = League_Gothic({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default async function Home() {
  // Pull episodes (expects fields: id, title, description, date, audioUrl)
  const episodes = await fetchEpisodes().catch(() => [])
  const featured = Array.isArray(episodes) && episodes.length > 0 ? episodes[0] : null

  return (
    <div className="space-y-24">
      {/* ======================= HERO (full-bleed, vertically centered) ======================= */}
      <section aria-label="Cover">
        {/* full-bleed wrapper */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-teal-400">
          {/* content container */}
          <div className="h-[85vh] flex items-center justify-center px-6">
            <div className="flex flex-col items-center justify-center text-center">
              {/* Title */}
              <h1 className="mb-8 font-extrabold tracking-tight">
                <span className="text-[4.5rem] md:text-[7rem] leading-none bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                  ON
                </span>{' '}
                <span className="text-[3.2rem] md:text-[5rem] italic leading-none text-black">
                  chart
                </span>
              </h1>

              {/* Two-column animated description (League Gothic) */}
              <div
                className={`${leagueGothic.className} mt-6 grid gap-10 md:gap-16 md:grid-cols-2 w-full px-6 md:px-12 lg:px-20 text-left`}
              >
                <AnimatedWords
                  className="block text-[clamp(2.5rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight"
                  text="Three friends, two cultures, one mission: humanizing healthcare through storytelling."
                  startDelay={0.15}
                  step={0.06}
                />
                <AnimatedWords
                  className="block text-[clamp(2.5rem,4.5vw,3.5rem)] leading-[1.1] tracking-tight"
                  text="We seek to amplify the voice of healthcare workers through unfiltered, deep conversations."
                  startDelay={0.6}
                  step={0.06}
                />
              </div>

              {/* Buttons */}
              <div className="mt-20 flex flex-wrap justify-center gap-4">
                <a
                  className="btn btn-primary btn-animate bg-gradient-to-r from-fuchsia-500 to-rose-500 hover:scale-[1.03] active:scale-[.98] shadow-lg shadow-rose-500/30 text-white"
                  href={process.env.SPOTIFY_SHOW_URL || '#'}
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen on Spotify
                </a>
                <Link
                  className="btn btn-animate border-0 bg-white text-neutral-900 shadow-md"
                  href="/episodes"
                >
                  Browse Episodes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= FEATURED EPISODE ======================= */}
      <section className="px-6" aria-label="Featured episode">
        <div className="max-w-6xl mx-auto">
          {featured ? (
            <article className="rounded-3xl bg-gradient-to-br from-cyan-400 to-sky-600 text-white p-8 md:p-10 shadow-xl">
              {/* Header row */}
              <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-wide mb-6 opacity-90">
                <span>Featured Episode</span>
                <span>
                  {new Date(featured.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                {featured.title}
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-5xl">
                {featured.description}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                {featured.audioUrl && (
                  <a
                    href={featured.audioUrl}
                    className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold shadow hover:opacity-90"
                  >
                    Listen
                  </a>
                )}
                <Link
                  href="/episodes"
                  className="px-5 py-2.5 rounded-xl bg-sky-800/30 ring-1 ring-white/30 text-white font-semibold shadow hover:bg-sky-800/40"
                >
                  View All Episodes
                </Link>
              </div>
            </article>
          ) : (
            /* Graceful empty state */
            <div className="rounded-2xl border p-8 text-neutral-700 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Featured Episode</h3>
              <p>
                Add <code className="font-mono px-1 bg-neutral-100 rounded">PODCAST_RSS</code> to your
                environment to import episodes automatically.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ======================= TEAM BIO — Emily-style memo + polaroids ======================= */}
      <section className="relative px-6" aria-label="About the team">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/80 via-white to-white" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Memo Card (Emily style) */}
          <article className="rounded-2xl border border-dotted border-neutral-300/80 bg-white/80 shadow-sm p-6 md:p-8">
            <div className="prose prose-neutral max-w-none">
              <p className="font-serif italic text-lg md:text-xl leading-relaxed text-neutral-900 mb-6">
                Hi, we’re the ON Chart team.
              </p>
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-neutral-900">
                We’re three friends who love medicine, stories, and honest
                conversations about the human connection. As pre-medical students, 
                we often find ourselves captivated by the magic of medicine in clinical 
                places where we see healthcare providers in action with the tools and machines 
                that help sustain and extend life, and witness the connections forged between patients
                and their caregivers. But, after each shadowing experience, we often find ourselves 
                searching for the deeper meaning of each connection we bore witness to: what does it 
                truly take to care for someone's wellbeing?
                
              </p>
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-neutral-900 mt-6">
                In the summer of 2023, we founded the ON Chart podcast as a way to explore this question.
                Our show brings voices from diverse healthcare providers who not only excel in their craft
                but also show their passions beyond medicine to enrich the way they give care to patients.
                Thanks for being here—we hope you’ll listen and stay in touch.

              </p>
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-neutral-900 mt-6">
                Want to collaborate, pitch a story, or just say hi? Reach out anytime
                on our contact page. We’d love to hear from you.
              </p>
            </div>

            <hr className="my-8 border-t border-neutral-300" />

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-serif italic text-2xl text-neutral-900">
                  Le Nguyen, Tremayne Ansani, Kayla Wong
                </p>
                <p className="tracking-wide text-sm text-neutral-500">
                  CREATORS • HOSTS • PRODUCERS
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-white font-semibold shadow hover:opacity-90"
              >
                About Us <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          {/* Polaroids — NON-OVERLAPPING */}
          <div className="md:pl-16 lg:pl-24">
            {/* Mobile: row of small cards */}
            <div className="flex md:hidden justify-center gap-4">
              <div className="w-32">
                <Polaroid src="/polaroids/kayla.jpg" name="Kayla" />
              </div>
              <div className="w-32">
                <Polaroid src="/polaroids/tremayne.jpg" name="Tremayne" />
              </div>
              <div className="w-32">
                <Polaroid src="/polaroids/le.jpg" name="Le" />
              </div>
            </div>

            {/* Desktop: Kayla + Tremayne on top, Le centered underneath */}
            <div className="hidden md:flex flex-col items-center">
              <div className="flex justify-center gap-10">
                <div className="w-[300px] origin-top scale-[1.3] -rotate-3 -mt-2">
                  <Polaroid src="/polaroids/kayla.jpg" name="Kayla" />
                </div>
                <div className="w-[300px] origin-top scale-[1.3] rotate-2 mt-6">
                  <Polaroid src="/polaroids/tremayne.jpg" name="Tremayne" />
                </div>
              </div>

              <div className="mt-20 w-[300px] origin-top scale-[1.3] -rotate-1">
                <Polaroid src="/polaroids/le.jpg" name="Le" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}