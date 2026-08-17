import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            className="inline-block h-3.5 w-3.5 rounded-sm"
            style={{
              background:
                'linear-gradient(135deg, var(--teal) 0%, var(--teal) 50%, var(--coral) 50%, var(--coral) 100%)',
            }}
            aria-hidden="true"
          />
          <span className="font-serif text-lg font-semibold tracking-tight">
            On Resonance
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Writing
          </Link>
          <Link
            href="/#about"
            className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            About
          </Link>
          <Link
            href="#subscribe"
            className="rounded-lg border border-accent/40 px-3 py-1.5 font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Subscribe
          </Link>
        </nav>
      </div>
    </header>
  )
}
