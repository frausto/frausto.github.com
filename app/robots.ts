import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

// Emitted as a static /robots.txt by `output: export`.
export const dynamic = 'force-static'

// Next's RSC payload files sit alongside the HTML in the export. They're build
// artifacts, not pages, so keep them out of indexes. Matched narrowly so that
// /llms.txt stays crawlable.
const buildArtifacts = ['/_next/', '/__next*', '/*index.txt', '/404.html']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Everything is welcome, including the AI crawlers — they read the same
        // pages as everyone else, so there's no separate allowlist to maintain.
        userAgent: '*',
        allow: '/',
        disallow: buildArtifacts,
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
