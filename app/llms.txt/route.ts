import { getAllPosts } from '@/lib/posts'
import { absoluteUrl, author, postUrl, site } from '@/lib/site'

// Rendered once at build time into a static /llms.txt.
export const dynamic = 'force-static'

/**
 * /llms.txt — a plain-markdown map of the site for LLMs and AI crawlers, per
 * the llms.txt convention (llmstxt.org). Every post is listed with its date and
 * summary, plus a link to its raw markdown source so a crawler can read the
 * text without parsing the page chrome. The .md files are emitted by
 * scripts/postbuild-og.mjs.
 */
export async function GET() {
  const posts = getAllPosts()

  const postLines = posts
    .map((post) => {
      const date = post.date.slice(0, 10)
      return `- [${post.title}](${postUrl(post.slug)}) — ${date}. ${post.excerpt} [Markdown: ${absoluteUrl(`/posts/${post.slug}.md`)}]`
    })
    .join('\n')

  const body = `# ${site.name}

> ${site.longDescription}

Author: ${author.name} — ${author.bio}
Site: ${absoluteUrl('/')}
Feed: ${absoluteUrl('/feed.xml')}
Sitemap: ${absoluteUrl('/sitemap.xml')}
License: Content © ${author.name}. Quote with attribution and a link to the source post.

## Posts

${postLines}

## About

${author.name} is a CTO, software engineer, and writer living in the Bay Area,
with a career spent building software, products, and engineering teams. This
site collects essays on technology and AI, the people building them, the
organizations that form around them, and the ways things go right and wrong.

Full about section: ${absoluteUrl('/#about')}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
