export function SubscribeForm() {
  return (
    <section
      id="subscribe"
      className="scroll-mt-20 border-t border-border py-16"
    >
      <div className="rounded-xl border border-border bg-card px-6 py-8 sm:px-8 sm:py-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Newsletter
        </p>
        <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          New writing, straight to your inbox.
        </h2>
        <p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Occasional essays on technology, work, people, and life. No spam,
          unsubscribe whenever.
        </p>

        <form
          action="https://buttondown.com/api/emails/embed-subscribe/frausto"
          method="post"
          target="_blank"
          className="embeddable-buttondown-form mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="bd-email" className="sr-only">
            Enter your email
          </label>
          <input
            type="email"
            name="email"
            id="bd-email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="h-11 w-full rounded-lg border border-input bg-background px-3.5 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40 sm:max-w-xs sm:text-sm"
          />
          <button
            type="submit"
            className="h-11 shrink-0 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-all outline-none hover:bg-primary/85 focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
