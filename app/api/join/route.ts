// app/api/join/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const form = await req.formData()
  const company = form.get('company') as string | null
  if (company) {
    // honeypot: spam
    return NextResponse.json({ ok: true })
  }

  const firstName = form.get('firstName') as string || ''
  const lastName = form.get('lastName') as string || ''
  const email = form.get('email') as string || ''
  const phone = form.get('phone') as string || ''
  const position = form.get('position') as string || ''
  const cvLink = form.get('cvLink') as string || ''
  const resume = form.get('resume') as File | null

  if (!firstName || !lastName || !email || !position) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  // Set up transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true for 465, false for TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Prepare attachments if resume provided
  const attachments = resume
    ? [
        {
          filename: resume.name,
          content: Buffer.from(await resume.arrayBuffer()),
        },
      ]
    : []

  const mailOptions = {
    from: `"ON Chart Podcast" <${process.env.SMTP_USER}>`,
    to: 'medicalize.this@gmail.com',
    subject: `New Team Application — ${firstName} ${lastName}`,
    html: `
      <h2>New application</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Position:</b> ${position}</p>
      <p><b>CV/LinkedIn:</b> ${cvLink}</p>
      <p><b>Resume attached:</b> ${resume ? resume.name : 'none'}</p>
    `,
    attachments,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Error sending join email:', err)
    return NextResponse.json({ ok: false, error: 'Error sending email' }, { status: 500 })
  }
}
