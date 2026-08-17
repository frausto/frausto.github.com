// Single source of truth for the identity metadata that shows up in <head>,
// robots.txt, the sitemap, the RSS feed, llms.txt, and the JSON-LD blocks.
// Everything that a crawler reads should agree, so it all comes from here.

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://nolanfrausto.com'
).replace(/\/$/, '')

export const site = {
  url: siteUrl,
  name: 'On Resonance',
  title: 'On Resonance — Engineering, tech & life',
  tagline: 'Engineering, tech & life',
  description:
    'A personal blog about the craft of engineering, tech work, personal philosophy, and life.',
  // Longer form, used where there is room to be specific (llms.txt, JSON-LD).
  longDescription:
    'Essays by Nolan Frausto on software engineering, engineering leadership, AI, the organizations that form around technology, and what makes a life feel meaningful.',
  language: 'en',
  locale: 'en_US',
  keywords: [
    'software engineering',
    'engineering leadership',
    'engineering management',
    'CTO',
    'AI',
    'technology',
    'boring technology',
    'code quality',
    'engineering culture',
    'personal blog',
  ],
} as const

export const author = {
  name: 'Nolan Frausto',
  jobTitle: 'CTO',
  email: 'nrfrausto@gmail.com',
  // Used as sameAs in JSON-LD so search engines and AI crawlers can link the
  // site's author to the same person elsewhere on the web.
  sameAs: ['https://www.linkedin.com/in/nolanfrausto'],
  bio: 'CTO, software engineer, and writer in the Bay Area. Writes about building software, products, and engineering teams.',
} as const

/**
 * Feed discovery for `metadata.alternates.types`. Next replaces the whole
 * `alternates` object when a page defines its own, so every page that sets a
 * canonical has to spread this back in or it loses the feed <link>.
 */
export function feedAlternates() {
  return {
    'application/rss+xml': [{ url: '/feed.xml', title: `${site.name} — RSS` }],
  }
}

/** Absolute URL for a site-relative path, with the trailing slash the export uses. */
export function absoluteUrl(pathname = '/'): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${siteUrl}${path}`
}

export function postUrl(slug: string): string {
  return absoluteUrl(`/posts/${slug}/`)
}
