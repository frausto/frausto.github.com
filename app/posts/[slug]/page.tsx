import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Markdown } from '@/components/markdown'
import { SubscribeForm } from '@/components/subscribe-form'
import { PostStructuredData } from '@/components/structured-data'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/format-date'
import { absoluteUrl, author, feedAlternates, site } from '@/lib/site'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Not found' }

  const url = `/posts/${slug}/`

  return {
    // The site name is appended by the template in app/layout.tsx.
    title: post.title,
    description: post.excerpt,
    ...(post.tags.length ? { keywords: post.tags } : {}),
    authors: [{ name: author.name, url: absoluteUrl('/') }],
    alternates: { canonical: url, types: feedAlternates() },
    // The image itself comes from opengraph-image.tsx in this folder.
    openGraph: {
      type: 'article',
      siteName: site.name,
      locale: site.locale,
      title: post.title,
      description: post.excerpt,
      url,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [author.name],
      ...(post.tags.length ? { tags: post.tags } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className="flex min-h-screen flex-col">
      <PostStructuredData post={post} />
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <article className="py-14 sm:py-16">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All writing
          </Link>

          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <Link
                href="/#about"
                rel="author"
                className="transition-colors hover:text-accent"
              >
                {author.name}
              </Link>
              <span
                className="h-1 w-1 rounded-full bg-accent"
                aria-hidden="true"
              />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span
                className="h-1 w-1 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-[2.75rem]">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            ) : null}
          </header>

          <div className="h-px w-full bg-border" />

          <div className="mt-10">
            <Markdown content={post.content} />
          </div>
        </article>

        <SubscribeForm />
      </main>

      <SiteFooter />
    </div>
  )
}
