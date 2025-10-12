'use client'
import { useState } from 'react'
import {
  Instagram,
  Linkedin,
  Facebook,
  Twitter,
  Youtube,
  Newspaper,
  Music2,
} from 'lucide-react'

export default function ContactPage() {
  // ----- Contact form state -----
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data })
      if (res.ok) {
        setSent(true)
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Network error. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  // ----- Join form state -----
  const [joinSent, setJoinSent] = useState(false)
  const [joinSending, setJoinSending] = useState(false)

  async function handleJoinSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setJoinSending(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('/api/join', { method: 'POST', body: data })
      if (res.ok) {
        setJoinSent(true)
        form.reset()
      } else {
        alert('Could not submit application. Please try again.')
      }
    } catch {
      alert('Network error. Please try again later.')
    } finally {
      setJoinSending(false)
    }
  }

  return (
    <main className="text-neutral-800">
      {/* ================= HERO STRIP + CARD ================= */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-r from-rose-300 via-rose-200 to-cyan-300">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="rounded-2xl border border-neutral-300/50 bg-white/95 shadow-sm">
            <div className="p-6 md:p-10">
              <p className="text-sm font-semibold tracking-wide text-neutral-700">
                CONTACT US
              </p>

              <hr className="my-4 border-neutral-300" />

              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight italic mb-6">
                Get In Touch
              </h1>

              <p className="max-w-3xl text-lg text-neutral-700">
                Whether you have a story to share, a question to ask, or simply want to connect,
                we’re here to listen. Reach out to us, and let’s continue to humanize the world of medicine together.
              </p>

              <hr className="my-6 border-neutral-300" />

              <div className="flex justify-end">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm font-semibold tracking-wide hover:bg-neutral-50 active:opacity-90"
                >
                  SUBMIT FORM <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTACT INFORMATION STRIP ================= */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-10 mb-6 flex items-center gap-4">
          <h2 className="text-sm font-bold tracking-wide text-neutral-900">
            CONTACT INFORMATION
          </h2>
          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
          <p className="text-neutral-700 leading-relaxed">
            We’re always glad to hear from you—whether you’d like to suggest a guest, explore a creative partnership, or simply reach out and connect.
          </p>

          <p className="mt-4 rounded-xl bg-white p-4 text-sm text-neutral-700">
            <strong className="font-semibold">Please note:</strong> While we’re unable to consider promotional guest pitches from healthcare companies or entrepreneurs, we do welcome sponsorship collaborations. If you’re reaching out about sponsorship, please mention that in your message below.
          </p>

          {/* Social row */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={process.env.SPOTIFY_SHOW_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="Spotify"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100"
            >
              <Music2 className="h-5 w-5" />
            </a>
            <a
              href={process.env.APPLE_PODCAST_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="Apple Podcasts"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100"
            >
              <Newspaper className="h-5 w-5" />
            </a>
            <a
              href={process.env.YOUTUBE_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_X_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= CONTACT FORM (ANCHOR TARGET) ================= */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <section id="contact-form" aria-label="Contact form" className="max-w-xl mx-auto mb-20">
          <h3 className="sr-only">Contact form</h3>

          {sent ? (
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center">
              <h4 className="text-2xl font-semibold text-green-700 mb-2">Thank you!</h4>
              <p className="text-green-700">
                We appreciate your message. Someone on our team will get back to you soon.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                className="w-full rounded border p-2"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="w-full rounded border p-2"
                name="email"
                placeholder="you@example.com"
                type="email"
                required
              />
              <textarea
                className="w-full rounded border p-2"
                name="message"
                placeholder="How can we help?"
                rows={6}
                required
              />
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'Sending…' : 'Send'}
              </button>
            </form>
          )}
        </section>

        {/* ================= JOIN OUR TEAM (BELOW CONTACT FORM) ================= */}
        <section id="join-our-team" className="border-t border-neutral-200 pt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Join Our Team</h2>
            <div className="mx-auto mt-3 h-1 w-10 bg-neutral-900/80 rounded-full" />
            <p className="mt-6 text-neutral-600 max-w-2xl mx-auto">
              We’re always looking for creative, mission-driven people to help humanize medicine
              through storytelling. If you’re passionate about audio, writing, or design, we’d love to hear from you.
            </p>
          </div>

          {joinSent ? (
            <div className="max-w-2xl mx-auto p-6 bg-teal-50 border border-teal-200 rounded-xl text-center">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Application received!</h3>
              <p className="text-teal-700">Thanks for applying — we’ll review your submission and get back to you.</p>
              <button
                onClick={() => setJoinSent(false)}
                className="mt-4 px-4 py-2 rounded-md bg-neutral-900 text-white hover:opacity-90"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleJoinSubmit}
              encType="multipart/form-data"
              className="grid gap-6 max-w-2xl mx-auto"
            >
              {/* Row 1: First / Last */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    className="h-12 w-full rounded-full bg-neutral-100/80 px-5 outline-none ring-1 ring-transparent focus:ring-neutral-300"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    className="h-12 w-full rounded-full bg-neutral-100/80 px-5 outline-none ring-1 ring-transparent focus:ring-neutral-300"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* Row 2: Email / Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email <span className="text-rose-600">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-12 w-full rounded-full bg-neutral-100/80 px-5 outline-none ring-1 ring-transparent focus:ring-neutral-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    className="h-12 w-full rounded-full bg-neutral-100/80 px-5 outline-none ring-1 ring-transparent focus:ring-neutral-300"
                    placeholder="+1 (___) ___-____"
                  />
                </div>
              </div>

              {/* Row 3: Position */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Position <span className="text-rose-600">*</span>
                </label>
                <select
                  name="position"
                  required
                  className="h-12 w-full rounded-full bg-neutral-100/80 px-5 outline-none ring-1 ring-transparent focus:ring-neutral-300"
                  defaultValue=""
                >
                  <option value="" disabled>Choose one</option>
                  <option>Host</option>
                  <option>Script Writer</option>
                  <option>Producer</option>
                  <option>Fact-checker</option>
                  <option>Art Director</option>
                  <option>Graphic Designer</option>
                  <option>Social Media Strategist</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Row 4: CV / LinkedIn */}
              <div>
                <label className="block text-sm font-medium mb-2">Link to LinkedIn</label>
                <input
                  name="cvLink"
                  type="url"
                  className="h-12 w-full rounded-full bg-neutral-100/80 px-5 outline-none ring-1 ring-transparent focus:ring-neutral-300"
                  placeholder="https://www.linkedin.com/in/you"
                />
              </div>

              {/* Row 5: File upload */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  CV File upload <span className="text-rose-600">*</span>
                </label>
                <input
                  name="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="block w-full rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-4 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-900 file:px-4 file:py-2 file:text-white hover:file:bg-neutral-800"
                />
                <p className="mt-2 text-xs text-neutral-500">Accepted: PDF, DOC, DOCX</p>
              </div>

              {/* Honeypot */}
              <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Submit */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full md:w-72 rounded-full bg-neutral-900 px-6 py-3 text-white font-semibold shadow hover:opacity-95 active:opacity-90"
                  disabled={joinSending}
                >
                  {joinSending ? 'Submitting…' : 'Apply'}
                </button>
              </div>
            </form>
          )}
        </section>
      </div>

      {/* ================= NEWSLETTER (BELOW JOIN) ================= */}
      <section id="newsletter" className="mt-6 mx-auto max-w-5xl px-6 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/70 via-sky-500/60 to-rose-500/70 p-[1px] shadow">
          <div className="rounded-2xl bg-white/90 p-6 md:p-10">
            <p className="text-sm font-bold tracking-[0.12em] uppercase text-neutral-900">
              Subscribe to our newsletter
            </p>
            <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
              Stay updated with new stories, episodes, and events.
            </h2>
            <hr className="my-6 border-neutral-200" />

            {/* Substack POST; opens confirmation in new tab */}
            <form
              action={`https://${process.env.NEXT_PUBLIC_SUBSTACK_PUB || 'onchartpodcast'}.substack.com/api/v1/free`}
              method="post"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex flex-col gap-3 md:flex-row"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Type your email…"
                className="h-12 w-full rounded-full border border-neutral-300 bg-white/95 px-5 text-neutral-900 outline-none focus:border-neutral-400 md:flex-1"
              />
              <input type="hidden" name="referrer" value="contact_newsletter_card" />
              <button
                type="submit"
                className="h-12 rounded-full bg-violet-600 px-6 text-white font-semibold shadow hover:bg-violet-700 active:opacity-90 md:w-auto"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-xs text-neutral-600">
              By subscribing you agree to Substack’s{' '}
              <a
                href={`https://${process.env.NEXT_PUBLIC_SUBSTACK_PUB || 'onchartpodcast'}.substack.com/publisher/terms`}
                className="underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Use
              </a>{' '}
              and{' '}
              <a
                href={`https://${process.env.NEXT_PUBLIC_SUBSTACK_PUB || 'onchartpodcast'}.substack.com/p/privacy`}
                className="underline underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
