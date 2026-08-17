import { readFile } from 'fs/promises'
import path from 'path'

// Shared pieces for the generated social preview images (opengraph-image.tsx).
// Colors are hardcoded hex rather than the oklch CSS variables from globals.css
// because satori, the renderer behind ImageResponse, only understands plain
// color values.
export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

const teal = '#0397bd'
const coral = '#e14c40'
const background = '#fafbfc'
const foreground = '#191d26'
const mutedForeground = '#5f6673'

const fontsDirectory = path.join(process.cwd(), 'assets/fonts')

async function readFont(fileName: string) {
  return readFile(path.join(fontsDirectory, fileName))
}

export async function loadOgFonts() {
  const [fraunces, inter, interSemiBold] = await Promise.all([
    readFont('Fraunces-SemiBold.ttf'),
    readFont('Inter-Regular.ttf'),
    readFont('Inter-SemiBold.ttf'),
  ])

  return [
    { name: 'Fraunces', data: fraunces, weight: 600 as const, style: 'normal' as const },
    { name: 'Inter', data: inter, weight: 400 as const, style: 'normal' as const },
    { name: 'Inter', data: interSemiBold, weight: 600 as const, style: 'normal' as const },
  ]
}

// Long titles get smaller type so they stay inside three lines.
function titleFontSize(title: string) {
  if (title.length > 90) return 48
  if (title.length > 55) return 58
  return 68
}

export function OgCard({
  title,
  excerpt,
  meta,
}: {
  title: string
  excerpt?: string
  /** Small footer items, e.g. the date and reading time. */
  meta?: string[]
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        background,
        fontFamily: 'Inter',
      }}
    >
      <div
        style={{
          height: 10,
          width: '100%',
          background: `linear-gradient(90deg, ${teal} 0%, ${coral} 100%)`,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          padding: '64px 72px 60px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 5,
              background: `linear-gradient(135deg, ${teal} 0%, ${teal} 50%, ${coral} 50%, ${coral} 100%)`,
            }}
          />
          <div
            style={{
              fontFamily: 'Fraunces',
              fontSize: 30,
              color: foreground,
              letterSpacing: -0.4,
            }}
          >
            On Resonance
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
          <div
            style={{
              display: 'block',
              fontFamily: 'Fraunces',
              fontSize: titleFontSize(title),
              lineHeight: 1.12,
              letterSpacing: -1,
              color: foreground,
              lineClamp: 3,
            }}
          >
            {title}
          </div>

          <div style={{ width: 72, height: 4, borderRadius: 2, background: teal, marginTop: 30 }} />

          {excerpt ? (
            <div
              style={{
                display: 'block',
                marginTop: 28,
                fontSize: 26,
                lineHeight: 1.45,
                color: mutedForeground,
                lineClamp: 2,
              }}
            >
              {excerpt}
            </div>
          ) : null}
        </div>

        {meta && meta.length > 0 ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 20,
              fontWeight: 600,
              color: mutedForeground,
            }}
          >
            {meta.map((item, index) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                {index > 0 ? (
                  <div style={{ width: 5, height: 5, borderRadius: 3, background: coral }} />
                ) : null}
                <div>{item}</div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
