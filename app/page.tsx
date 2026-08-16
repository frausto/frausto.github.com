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
              I'm Nolan. I'm a CTO, software engineer, writer, husband, and dad living in the Bay Area.
            </p>

            <p>
              I've spent most of my career building software, products, and engineering teams.
              I'm interested in technology and AI, but probably more interested in the people
              building them, the organizations that form around them, and all the strange ways
              things go right and wrong.
            </p>

            <p>
              Outside of work, I write, travel, read sci-fi and fantasy, occasionally play piano,
              play too many games, and spend a lot of time thinking about ambition, family,
              creativity, and what makes a life feel meaningful.
            </p>

            <p>
              This site is where I put some of those thoughts.
            </p>

            <p>
              There isn't really a theme beyond things I find interesting, things I can't leave
              alone, and things I want to remember.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
