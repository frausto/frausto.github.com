import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PostList } from '@/components/post-list'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        {/* Intro */}
        <section className="py-16 sm:py-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
          Nolan Frausto — CTO, writer, and builder.
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Writing for {' '}
            <span className="text-primary">Resonance</span> and{' '}
            <span className="text-accent">Meaning</span>.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Trying to figure out how to pursue a better life without confusing ambition with worth, or progress with purpose. Thoughts on technology, work, people, and life, while trying to become more thoughtful, more forgiving, and more fully myself.

          </p>
        </section>

        {/* Recent posts */}
        <section className="pb-4">
          <div className="mb-2 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl font-semibold tracking-tight">
              Recent writing
            </h2>
            <span className="text-sm text-muted-foreground">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </span>
          </div>
          <PostList posts={posts} />
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-20 border-t border-border py-16"
        >
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            About
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m an engineer who cares as much about how things are built
              as what gets built. Most of my days are spent designing systems,
              writing code, and trying to leave things a little clearer than I
              found them.
            </p>
            <p>
              This is where I think out loud — about technical work, about the
              philosophy that guides it, and about the ordinary business of
              living a good life alongside all of it.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
