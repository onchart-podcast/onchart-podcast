import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import type { ReactNode } from 'react'
import { mdxComponents } from '@/components/mdx'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export type BlogFrontmatter = {
  title: string
  date: string
  excerpt: string
  readTime: string
  tags: string[]
  author: string
  cover: string
}

export type BlogSummary = BlogFrontmatter & {
  slug: string
}

export type BlogPost = {
  meta: BlogSummary
  content: ReactNode
}

async function getPostFilenames() {
  try {
    const files = await fs.readdir(postsDirectory)
    return files.filter(file => file.endsWith('.mdx'))
  } catch (error) {
    console.warn('Unable to read blog directory', error)
    return []
  }
}

export async function getAllPosts(): Promise<BlogSummary[]> {
  const filenames = await getPostFilenames()

  const posts = await Promise.all(
    filenames.map(async filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const filePath = path.join(postsDirectory, filename)
      const file = await fs.readFile(filePath, 'utf8')
      const { data } = matter(file)
      const frontmatter = data as Partial<BlogFrontmatter>

      if (!frontmatter.title || !frontmatter.date) {
        throw new Error(`Post ${filename} is missing required frontmatter fields`)
      }

      return {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        excerpt: frontmatter.excerpt ?? '',
        readTime: frontmatter.readTime ?? '',
        tags: frontmatter.tags ?? [],
        author: frontmatter.author ?? '',
        cover: frontmatter.cover ?? 'from-neutral-200 to-neutral-400',
      }
    })
  )

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)

  try {
    const source = await fs.readFile(filePath, 'utf8')
    const { frontmatter, content } = await compileMDX<BlogFrontmatter>({
      source,
      options: { parseFrontmatter: true },
      components: mdxComponents,
    })

    return {
      meta: {
        slug,
        title: frontmatter.title,
        date: frontmatter.date,
        excerpt: frontmatter.excerpt ?? '',
        readTime: frontmatter.readTime ?? '',
        tags: frontmatter.tags ?? [],
        author: frontmatter.author ?? '',
        cover: frontmatter.cover ?? 'from-neutral-200 to-neutral-400',
      },
      content,
    }
  } catch (error) {
    console.error(`Unable to load blog post: ${slug}`, error)
    return undefined
  }
}

export async function getFeaturedPosts(limit = 3) {
  const posts = await getAllPosts()
  return posts.slice(0, limit)
}
