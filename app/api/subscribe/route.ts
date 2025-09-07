import { NextResponse } from 'next/server'

export async function POST(req: Request){
  const fd = await req.formData()
  const email = String(fd.get('email') || '')
  if (!email) return NextResponse.json({ ok:false }, { status: 400 })
  // TODO: Integrate with Buttondown/Mailchimp
  console.log('Subscribe:', email)
  return NextResponse.json({ ok:true })
}
