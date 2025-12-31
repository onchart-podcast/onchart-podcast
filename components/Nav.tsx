'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/episodes', label: 'Episodes' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav(){
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">ON Chart podcast</Link>
        <div className="flex gap-5 text-sm">
          {links.map(l => (
            <Link key={l.href}
              className={pathname === l.href ? 'font-semibold' : 'opacity-80 hover:opacity-100'}
              href={l.href}>{l.label}</Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
