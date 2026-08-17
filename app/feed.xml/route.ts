import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { getAllPostsWithContent } from '@/lib/posts'
import { absoluteUrl, author, postUrl, site } from '@/lib/site'

// Rendered once at build time into a static /feed.xml.
export const dynamic = 'force-static'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/** Wraps content in CDATA, splitting any literal `]]>` that would close it early. */
function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`
}

// Same remark plugins as components/markdown.tsx, so the HTML in the feed
// matches what the site renders — just stringified instead of turned into React.
const markdownToHtml = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify)

/**
 * The post body as HTML. Relative links are made absolute, since a feed item is
 * read outside the context of the page it came from.
 */
function renderPostHtml(markdown: string): string {
  const html = String(markdownToHtml.processSync(markdown))
  return html.replace(
    /(href|src)="\/([^"]*)"/g,
    (_match, attr, path) => `${attr}="${absoluteUrl(`/${path}`)}"`
  )
}

export async function GET() {
  const posts = getAllPostsWithContent()
  const updated = posts[0] ? new Date(posts[0].updated) : new Date()

  const items = posts
    .map((post) => {
      const url = postUrl(post.slug)
      const categories = post.tags
        .map((tag) => `\n      <category>${escapeXml(tag)}</category>`)
        .join('')
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(author.name)}</dc:creator>
      <description>${cdata(post.excerpt)}</description>
      <content:encoded>${cdata(renderPostHtml(post.content))}</content:encoded>${categories}
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(site.title)}</title>
    <link>${absoluteUrl('/')}</link>
    <description>${escapeXml(site.description)}</description>
    <language>${site.language}</language>
    <managingEditor>${author.email} (${escapeXml(author.name)})</managingEditor>
    <webMaster>${author.email} (${escapeXml(author.name)})</webMaster>
    <lastBuildDate>${updated.toUTCString()}</lastBuildDate>
    <atom:link href="${absoluteUrl('/feed.xml')}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  })
}
