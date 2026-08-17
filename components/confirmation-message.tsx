'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

// Buttondown redirects here with ?email_address=..., but it's an untrusted
// query param rendered as copy, so only show it if it actually looks like an
// address — otherwise anyone could hand out a link that puts words in my mouth.
function readEmailAddress(): string | null {
  const raw = new URLSearchParams(window.location.search).get('email_address')
  if (!raw) return null

  // URLSearchParams decodes "+" as a space, and no address contains a space,
  // so this restores plus-addressed emails without corrupting anything else.
  const email = raw.replace(/ /g, '+').trim()

  if (email.length > 254) return null
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null

  return email
}

export function ConfirmationMessage() {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    setEmail(readEmailAddress())
  }, [])

  return (
    <>
      <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        One last step — you're not on the list yet. I just sent a confirmation
        email{' '}
        {email ? (
          <>
            to{' '}
            <span className="font-medium text-foreground">{email}</span>
          </>
        ) : (
          'to you'
        )}
        . Open it and click the link inside to finish signing up.
      </p>

      {email ? (
        <p className="mt-3 text-sm text-muted-foreground">
          Not the right address?{' '}
          <Link
            href="/#subscribe"
            className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Sign up again
          </Link>{' '}
          with another one.
        </p>
      ) : null}
    </>
  )
}
