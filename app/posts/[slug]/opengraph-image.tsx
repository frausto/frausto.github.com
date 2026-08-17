import { ImageResponse } from 'next/og'
import { getAllSlugs, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/format-date'
import { OgCard, loadOgFonts, ogContentType, ogSize } from '@/lib/og'

// Required by `output: export`: the image is rendered once at build time.
export const dynamic = 'force-static'
export const size = ogSize
export const contentType = ogContentType
export const alt = 'On Resonance'

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return new ImageResponse(
    (
      <OgCard
        title={post?.title ?? 'On Resonance'}
        excerpt={post?.excerpt}
        meta={post ? [formatDate(post.date), post.readingTime] : undefined}
      />
    ),
    { ...size, fonts: await loadOgFonts() }
  )
}
