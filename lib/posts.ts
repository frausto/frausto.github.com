import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

const WORDS_PER_MINUTE = 200

export type PostMeta = {
  slug: string
  title: string
  date: string
  /** Last meaningful edit, from `updated` frontmatter; falls back to `date`. */
  updated: string
  excerpt: string
  readingTime: string
  readingTimeMinutes: number
  wordCount: number
  tags: string[]
}

export type Post = PostMeta & {
  content: string
}

function countWords(text: string): number {
  const trimmed = text.trim()
  return trimmed ? trimmed.split(/\s+/).length : 0
}

/**
 * Strips the markdown syntax that would otherwise leak into meta descriptions
 * and feed summaries. Deliberately simple — it only has to handle the subset
 * of markdown these posts use.
 */
function toPlainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s{0,3}>\s?/gm, '')
    .replace(/(\*\*|__|\*|_)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** First ~180 characters of prose, cut on a word boundary. */
function deriveExcerpt(markdown: string): string {
  const text = toPlainText(markdown)
  if (text.length <= 180) return text
  const clipped = text.slice(0, 180)
  const lastSpace = clipped.lastIndexOf(' ')
  return `${clipped.slice(0, lastSpace > 0 ? lastSpace : clipped.length)}…`
}

function toIsoDate(value: unknown, fallback?: string): string {
  if (!value) return fallback ?? new Date().toISOString()
  const parsed = new Date(value as string)
  if (Number.isNaN(parsed.getTime())) return fallback ?? new Date().toISOString()
  return parsed.toISOString()
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) return value.map((tag) => String(tag).trim()).filter(Boolean)
  if (typeof value === 'string') {
    return value
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)
  }
  return []
}

function readPostFile(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, '')
  const fullPath = path.join(postsDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const wordCount = countWords(content)
  const date = toIsoDate(data.date)

  return {
    slug,
    title: data.title ?? slug,
    date,
    updated: toIsoDate(data.updated, date),
    excerpt: data.excerpt ?? deriveExcerpt(content),
    readingTime: `${Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))} min read`,
    readingTimeMinutes: Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE)),
    wordCount,
    tags: normalizeTags(data.tags),
    content,
  }
}

function postFileNames(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'))
}

export function getAllPosts(): PostMeta[] {
  return postFileNames()
    .map((file) => {
      const { content, ...meta } = readPostFile(file)
      return meta
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** Full posts, newest first — for the feed and llms.txt, which need bodies. */
export function getAllPostsWithContent(): Post[] {
  return postFileNames()
    .map((file) => readPostFile(file))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  return readPostFile(`${slug}.md`)
}

export function getAllSlugs(): string[] {
  return postFileNames().map((file) => file.replace(/\.md$/, ''))
}
