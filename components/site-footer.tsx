import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nolan Frausto — On Resonance</p>
        <div className="flex items-center gap-5">
          <a
            href="mailto:nrfrausto@gmail.com"
            className="transition-colors hover:text-accent"
          >
            Email
          </a>
          <Link href="https://www.linkedin.com/in/nolanfrausto" className="transition-colors hover:text-accent">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
