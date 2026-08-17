import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { absoluteUrl, postUrl } from '@/lib/site'

// Emitted as a static /sitemap.xml by `output: export`.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  const newestPost = posts[0]

  return [
    {
      url: absoluteUrl('/'),
      // The home page lists the posts, so it changes when the newest one does.
      lastModified: newestPost ? new Date(newestPost.updated) : new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...posts.map((post) => ({
      url: postUrl(post.slug),
      lastModified: new Date(post.updated),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ]
}
