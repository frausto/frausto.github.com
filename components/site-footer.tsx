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
          {/* rel="me" ties the profile back to this site for identity
              verification, and mirrors the sameAs in the JSON-LD. */}
          <a
            href="https://www.linkedin.com/in/nolanfrausto"
            rel="me noopener"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="/feed.xml"
            type="application/rss+xml"
            className="transition-colors hover:text-accent"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  )
}
