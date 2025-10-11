import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  // 👇 This matches a normal HTML form post
  const form = await request.formData()
  const name = String(form.get('name') || '')
  const email = String(form.get('email') || '')
  const message = String(form.get('message') || '')

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `New message from ${name}`,
      text: message,
    })

    // Option 1: JSON response (page will show raw JSON unless you handle it)
    // return NextResponse.json({ ok: true })

    // Option 2: PRG pattern – redirect back with a flag
    return NextResponse.redirect(new URL('/contact?sent=1', request.url))
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}

