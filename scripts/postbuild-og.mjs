// Next writes generated metadata images to extension-less files
// (out/posts/<slug>/opengraph-image). GitHub Pages then serves them as
// application/octet-stream, which stops Twitter/Slack/LinkedIn from rendering
// the preview. This renames them to *.png and points the meta tags at the new
// name (also dropping Next's cache-busting query, which a static host ignores).
import { readdir, readFile, rename, writeFile } from 'fs/promises'
import path from 'path'

const outDir = path.join(process.cwd(), 'out')
const imageNames = new Set(['opengraph-image', 'twitter-image'])

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...(await walk(full)))
    else files.push(full)
  }
  return files
}

const files = await walk(outDir)

let renamed = 0
for (const file of files) {
  if (!imageNames.has(path.basename(file))) continue
  await rename(file, `${file}.png`)
  renamed += 1
}

if (renamed === 0) {
  console.log('postbuild-og: no generated social images found, nothing to do')
  process.exit(0)
}

let patched = 0
for (const file of files.filter((f) => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8')
  const next = html.replace(/(opengraph-image|twitter-image)(\?[a-zA-Z0-9]+)?/g, '$1.png')
  if (next !== html) {
    await writeFile(file, next)
    patched += 1
  }
}

console.log(`postbuild-og: renamed ${renamed} image(s), updated ${patched} HTML file(s)`)
