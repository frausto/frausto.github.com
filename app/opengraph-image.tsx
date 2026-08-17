import { ImageResponse } from 'next/og'
import { OgCard, loadOgFonts, ogContentType, ogSize } from '@/lib/og'

// Required by `output: export`: the image is rendered once at build time.
export const dynamic = 'force-static'
export const size = ogSize
export const contentType = ogContentType
export const alt = 'On Resonance — Engineering, tech & life'

// Default preview for the home page and any route without its own image.
export default async function Image() {
  return new ImageResponse(
    (
      <OgCard
        title="Engineering, tech & life"
        excerpt="A personal blog about the craft of engineering, tech work, personal philosophy, and life."
      />
    ),
    { ...size, fonts: await loadOgFonts() }
  )
}
