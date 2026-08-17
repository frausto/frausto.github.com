import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Markdown } from '@/components/markdown'
import { SubscribeForm } from '@/components/subscribe-form'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/format-date'

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
  return {
    title: `${post.title} — On Resonance`,
    description: post.excerpt,
    // The image itself comes from opengraph-image.tsx in this folder.
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/posts/${slug}/`,
      publishedTime: post.date,
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
            <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
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
