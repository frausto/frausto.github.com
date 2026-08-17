import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, MailCheck } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ConfirmationMessage } from '@/components/confirmation-message'

export const metadata: Metadata = {
  title: 'Thanks for subscribing — On Resonance',
  description:
    'One more step: confirm your subscription from the email in your inbox.',
  robots: { index: false, follow: true },
}

export default function ThanksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader subscribeHref="/#subscribe" />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <section className="py-16 sm:py-24">
          <div className="rounded-xl border border-border bg-card px-6 py-10 sm:px-10 sm:py-12">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent"
              aria-hidden="true"
            >
              <MailCheck className="h-5 w-5" />
            </span>

            <h1 className="mt-6 text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
              Thanks for subscribing.
            </h1>

            <ConfirmationMessage />

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                If it hasn't arrived
              </p>
              <ul className="mt-4 flex flex-col gap-3 text-pretty leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>
                    Give it a minute or two — it's usually faster than that, but
                    not always.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>
                    Check your spam or promotions folder. Confirmation emails
                    love it there.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  <span>
                    Still nothing? Just{' '}
                    <a
                      href="mailto:nrfrausto@gmail.com"
                      className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      email me
                    </a>{' '}
                    and I'll sort it out.
                  </span>
                </li>
              </ul>
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to the writing
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
