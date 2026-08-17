import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, PartyPopper } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { getAllPosts } from '@/lib/posts'
import { formatDate } from '@/lib/format-date'

export const metadata: Metadata = {
  // The site name is appended by the template in app/layout.tsx.
  title: "You're subscribed",
  description: 'Your subscription is confirmed. Here is where to start reading.',
  // Not a page worth indexing, but it should still be its own canonical rather
  // than inheriting the layout's '/' and reading as a duplicate of the home page.
  alternates: { canonical: '/confirmed/' },
  robots: { index: false, follow: true },
}

export default function ConfirmedPage() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader subscribeHref="/#subscribe" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="py-16 sm:py-24">
          <div className="rounded-xl border border-border bg-card px-6 py-10 sm:px-10 sm:py-12">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"
              aria-hidden="true"
            >
              <PartyPopper className="h-5 w-5" />
            </span>

            <h1 className="mt-6 text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
              You're in.
            </h1>

            <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Your subscription is confirmed — nothing else to do. New essays
              will land in your inbox when I write them, which is often enough
              to be worth it and rarely enough to stay welcome.
            </p>

            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Every email has an unsubscribe link at the bottom, and replies
              come straight to me — I read all of them.
            </p>

            {posts.length > 0 ? (
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-medium uppercase tracking-widest text-accent">
                  While you're here
                </p>
                <ul className="mt-4 flex flex-col">
                  {posts.map((post) => (
                    <li
                      key={post.slug}
                      className="border-t border-border first:border-t-0"
                    >
                      <Link
                        href={`/posts/${post.slug}`}
                        className="group flex flex-col gap-1 py-4"
                      >
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <time dateTime={post.date}>
                            {formatDate(post.date)}
                          </time>
                          <span
                            className="h-1 w-1 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span>{post.readingTime}</span>
                        </div>
                        <h2 className="font-serif text-lg font-semibold tracking-tight text-foreground decoration-2 underline-offset-4 group-hover:text-primary group-hover:underline">
                          {post.title}
                        </h2>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              See all the writing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
