import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog | ON Chart podcast',
  description:
    'Field notes, creative prompts, and care frameworks from the ON Chart team.',
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts()

  return (
    <div className="space-y-16">
      <header className="max-w-3xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-500">
          Field Notes
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
          Stories and playbooks for human-centered medicine
        </h1>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Think of the blog as our studio sketchbook. Every post pulls a thread from a
          recent episode—reflection prompts, checklists, and rituals you can bring to your
          next rotation, campus clinic shift, or creative sprint.
        </p>
      </header>

      <section aria-label="Blog posts">
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map(post => (
            <article
              key={post.slug}
              className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-44 w-full bg-gradient-to-br ${post.cover}`} />
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                  <span aria-hidden>•</span>
                  <span>{post.readTime}</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-neutral-900">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 text-sm font-medium text-neutral-900">
                  <span>{post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-rose-500"
                  >
                    Read post <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
