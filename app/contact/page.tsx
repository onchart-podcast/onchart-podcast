export default function ContactPage(){
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form action="/api/contact" method="post" className="space-y-3">
        <input className="w-full rounded border p-2" name="name" placeholder="Your name" required />
        <input className="w-full rounded border p-2" name="email" placeholder="you@example.com" type="email" required />
        <textarea className="w-full rounded border p-2" name="message" placeholder="How can we help?" rows={6} required />
        <button className="btn btn-primary">Send</button>
      </form>
    
    </div>
  )
}
