import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Blog | ON Chart podcast',
    }
  }

  return {
    title: `${post.meta.title} | ON Chart podcast`,
    description: post.meta.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const { meta, content } = post

  return (
    <article className="space-y-10">
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-500">
        ← Back to blog
      </Link>

      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
          Field Notes
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">{meta.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
          <time dateTime={meta.date}>
            {new Date(meta.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span aria-hidden>•</span>
          <span>{meta.readTime}</span>
          <span aria-hidden>•</span>
          <span>{meta.author}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {meta.tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-neutral-900/5 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className={`h-60 rounded-3xl bg-gradient-to-br ${meta.cover}`} />

      <div className="prose prose-lg prose-neutral max-w-none">{content}</div>

      <footer className="rounded-3xl bg-neutral-900 text-white p-8 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
          Keep Exploring
        </p>
        <p className="text-xl font-semibold">Liked this reflection?</p>
        <p className="text-neutral-200">
          Share the episode, send us a note, or pitch a story idea. We read every message.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/contact" className="btn btn-animate bg-white/10 text-white">
            Contact Us
          </Link>
          <Link href="/episodes" className="btn btn-animate bg-white text-neutral-900">
            Listen to Episodes
          </Link>
        </div>
      </footer>
    </article>
  )
}
