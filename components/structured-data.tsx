import { absoluteUrl, author, postUrl, site } from '@/lib/site'
import type { Post, PostMeta } from '@/lib/posts'

/**
 * Renders a JSON-LD graph into the page. Search engines and AI crawlers use
 * this to read the site as data — who wrote a post, when, what it's about —
 * instead of inferring it from markup.
 *
 * `<` escaping guards against a `</script>` sequence inside any string
 * value breaking out of the tag.
 */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

// Stable @ids so the nodes below can reference each other across pages.
const personId = absoluteUrl('/#person')
const siteId = absoluteUrl('/#website')
const blogId = absoluteUrl('/#blog')

const personNode = {
  '@type': 'Person',
  '@id': personId,
  name: author.name,
  jobTitle: author.jobTitle,
  description: author.bio,
  url: absoluteUrl('/'),
  email: `mailto:${author.email}`,
  sameAs: author.sameAs,
  knowsAbout: [
    'Software engineering',
    'Engineering leadership',
    'Engineering culture',
    'Artificial intelligence',
    'Product development',
  ],
}

const siteNode = {
  '@type': 'WebSite',
  '@id': siteId,
  url: absoluteUrl('/'),
  name: site.name,
  alternateName: site.title,
  description: site.description,
  inLanguage: site.language,
  publisher: { '@id': personId },
  author: { '@id': personId },
}

/** Home page: the site, the blog, its author, and the posts it contains. */
export function SiteStructuredData({ posts }: { posts: PostMeta[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          personNode,
          siteNode,
          {
            '@type': 'Blog',
            '@id': blogId,
            url: absoluteUrl('/'),
            name: site.name,
            description: site.longDescription,
            inLanguage: site.language,
            author: { '@id': personId },
            publisher: { '@id': personId },
            blogPost: posts.map((post) => ({
              '@type': 'BlogPosting',
              '@id': `${postUrl(post.slug)}#article`,
              url: postUrl(post.slug),
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              dateModified: post.updated,
              author: { '@id': personId },
            })),
          },
          {
            '@type': 'ProfilePage',
            '@id': absoluteUrl('/#about'),
            url: absoluteUrl('/#about'),
            name: `About ${author.name}`,
            isPartOf: { '@id': siteId },
            mainEntity: { '@id': personId },
          },
        ],
      }}
    />
  )
}

/** Post page: the article itself, plus breadcrumbs back to the blog. */
export function PostStructuredData({ post }: { post: Post }) {
  const url = postUrl(post.slug)

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          personNode,
          siteNode,
          {
            '@type': 'BlogPosting',
            '@id': `${url}#article`,
            url,
            mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            headline: post.title,
            name: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.updated,
            wordCount: post.wordCount,
            timeRequired: `PT${post.readingTimeMinutes}M`,
            inLanguage: site.language,
            isPartOf: { '@id': blogId },
            isAccessibleForFree: true,
            author: { '@id': personId },
            publisher: { '@id': personId },
            image: [`${url}opengraph-image.png`],
            ...(post.tags.length ? { keywords: post.tags.join(', ') } : {}),
          },
          {
            '@type': 'BreadcrumbList',
            '@id': `${url}#breadcrumb`,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: site.name,
                item: absoluteUrl('/'),
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: post.title,
                item: url,
              },
            ],
          },
        ],
      }}
    />
  )
}
