import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'
import { formatDate } from '@/lib/format-date'

export function PostList({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-muted-foreground">
        No posts yet. Add a Markdown file to{' '}
        <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
          content/posts
        </code>{' '}
        to get started.
      </p>
    )
  }

  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li key={post.slug} className="border-t border-border first:border-t-0">
          <article>
            <Link
              href={`/posts/${post.slug}`}
              className="group flex flex-col gap-1.5 py-6 transition-colors"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span
                  className="h-1 w-1 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span>{post.readingTime}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold tracking-tight text-foreground decoration-2 underline-offset-4 group-hover:text-primary group-hover:underline">
                {post.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  )
}
