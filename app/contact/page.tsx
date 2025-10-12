'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: data, // still works with your existing API route (it expects formData)
      })

      if (res.ok) {
        setSent(true)
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (err) {
      alert('Network error. Please try again later.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>

      {sent ? (
        <div className="p-6 bg-green-50 border border-green-200 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Thank you!</h2>
          <p className="text-green-600">
            We sincerely appreciate your message and interest in our podcast. Someone on our team will get back to you soon.
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
          <button
            type="submit"
            className="btn btn-primary"
            disabled={sending}
          >
            {sending ? 'Sending…' : 'Send'}
          </button>
        </form>
      )}
    </div>
  )
}

