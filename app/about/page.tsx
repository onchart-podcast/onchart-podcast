// app/about/page.tsx
import Link from 'next/link'
import Polaroid from '@/components/Polaroid'

type TeamCardProps = {
  name: string
  role: string
  pronouns: string
  img: string
  imgAlt: string
  /** Tailwind object-position tweak, e.g. 'object-[center_20%]' */
  imgPos?: string
  bio: string
  favoriteUrl?: string
}

function TeamCard({
  name,
  role,
  pronouns,
  img,
  imgAlt,
  imgPos = 'object-center',
  bio,
  favoriteUrl,
}: TeamCardProps) {
  return (
    <article className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <div className="relative aspect-[3/4]">
        <img
          src={img}
          alt={imgAlt}
          className={`w-full h-full object-cover ${imgPos} grayscale hover:grayscale-0 transition duration-300`}
        />
      </div>

      <div className="p-6">
        <h3 className="font-serif italic text-xl font-semibold">{name}</h3>
        <p className="text-sm font-semibold text-green-500">{role}</p>
        <p className="text-sm text-neutral-600">{pronouns}</p>

        {/* Collapsible bio */}
        <details className="group mt-5 border-t pt-4">
          <summary className="list-none cursor-pointer select-none flex items-center gap-2 text-sm font-semibold">
            <span>Read Bio</span>
            <svg
              className="size-3.5 transition-transform group-open:rotate-90"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.05 4.55a1 1 0 0 1 1.4 0l4.95 4.95a1 1 0 0 1 0 1.4l-4.95 4.95a1 1 0 1 1-1.4-1.4L11.9 10 7.05 5.95a1 1 0 0 1 0-1.4z" />
            </svg>
          </summary>

          <div className="mt-3 text-sm leading-relaxed text-neutral-700">
            {bio}
          </div>
        </details>

        <div className="mt-4 flex justify-end">
          <a
            href={favoriteUrl || process.env.SPOTIFY_SHOW_URL || '#'}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold hover:underline"
          >
            Favorite Episode →
          </a>
        </div>
      </div>
    </article>
  )
}

export default function AboutPage() {
  return (
    <div className="space-y-16">
      {/* ========== Team memo (Emily-style) + polaroids ========== */}
      <section className="relative px-6">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/80 via-white to-white" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Memo card */}
          <article className="rounded-2xl border border-dotted border-neutral-300/80 bg-white/80 shadow-sm p-6 md:p-8">
            <div className="prose prose-neutral max-w-none">
              <p className="font-serif italic text-lg md:text-xl leading-relaxed text-neutral-900 mb-6">
                Hi, we’re the ON Chart team.
              </p>

              <p className="font-serif italic text-base md:text-lg leading-relaxed text-neutral-900">
                We’re three friends who love medicine, stories, and honest
                conversations about the human connection. As pre-medical students, 
                we've grown captivated by the magic of medicine in clinical 
                places where we saw healthcare providers in action with the tools and machines 
                that help sustain and extend life, and witnessed the connections forged between patients
                and their caregivers. But, after each shadowing experience, we often found ourselves 
                asking a fundamental question: what does it truly take to care for someone's wellbeing?
              </p>
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-neutral-900 mt-6">
                In the summer of 2023, we founded the ON Chart podcast as a way to explore this question.
                Our show brings voices from diverse healthcare providers who not only excel in their craft
                but also incorporate their avocations into patient care.
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
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-white font-semibold shadow hover:opacity-90"
              >
                Contact
                <span aria-hidden>→</span>
              </Link>
            </div>
          </article>

          {/* Polaroids */}
          <div className="md:pl-16 lg:pl-24">
            <div className="hidden md:flex justify-center gap-10">
              <div className="w-[300px] origin-top scale-[1.3] -rotate-3 -mt-2">
                <Polaroid src="/polaroids/kayla.jpg" name="Kayla" />
              </div>
              <div className="w-[300px] origin-top scale-[1.3] rotate-2 mt-6">
                <Polaroid src="/polaroids/tremayne.jpg" name="Tremayne" />
              </div>
            </div>

            <div className="hidden md:block mt-20 w-[300px] mx-auto origin-top scale-[1.3] -rotate-1">
              <Polaroid src="/polaroids/le.jpg" name="Le" />
            </div>

            {/* Mobile row */}
            <div className="md:hidden flex justify-center gap-4">
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
          </div>
        </div>
      </section>

      {/* ========== Individual bios grid ========== */}
      <section className="relative px-6 mt-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Our Team
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <TeamCard
              name="Kayla Wong"
              role="CREATOR • HOST • PRODUCER"
              pronouns="She / Her"
              img="/polaroids/kayla.jpg"
              imgAlt="Kayla Wong"
              imgPos="object-[center_25%]"  // show more forehead
              bio="TBD"
              favoriteUrl={process.env.SPOTIFY_SHOW_URL}
            />

            <TeamCard
              name="Tremayne Ansani"
              role="CREATOR • HOST • PRODUCER"
              pronouns="He / Him"
              img="/polaroids/tremayne.jpg"
              imgAlt="Tremayne Ansani"
              imgPos="object-[center_18%]"
              bio="TBD"
              favoriteUrl={process.env.SPOTIFY_SHOW_URL}
            />

            <TeamCard
              name="Le Nguyen"
              role="CREATOR • HOST • PRODUCER • WEBSITE DEVELOPER"
              pronouns="He / Him"
              img="/polaroids/le.jpg"
              imgAlt="Le Nguyen"
              imgPos="object-[center_18%]"
              bio="Le graduated from the George Washington University with a Bachelor of Science in Neuroscience. He has been to many places including Vietnam, Thailand, Louisiana, Minnesota, Colorado, California, Massachusetts, and Virginia, where he lives with his family. He loves petting his cat while she’s asleep and making quirky sounds with his mouth when he’s alone."
              favoriteUrl="https://open.spotify.com/episode/05sH9w096fN4CefGoRbePc"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
