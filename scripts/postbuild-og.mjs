// Next writes generated metadata images to extension-less files
// (out/posts/<slug>/opengraph-image). GitHub Pages then serves them as
// application/octet-stream, which stops Twitter/Slack/LinkedIn from rendering
// the preview, so this renames them to *.png.
//
// The HTML is deliberately left alone. Next inlines the RSC payload into every
// page as length-prefixed rows (`10:T8b3,<2227 bytes>`), so editing any string
// in the markup desynchronises those byte counts and React aborts hydration
// with "Connection closed" — the page renders, then swaps itself for the
// "This page couldn't load" error screen. The URLs are set to their final
// `.png` names at build time instead, via `ogImage()` in lib/site.ts.
import { copyFile, readdir, rename } from 'fs/promises'
import path from 'path'

const outDir = path.join(process.cwd(), 'out')
const postsDir = path.join(process.cwd(), 'content/posts')
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
  console.log('postbuild-og: no generated social images found, skipping rename')
}

// Publish each post's markdown source at /posts/<slug>.md. AI crawlers and
// anyone scripting against the site get the prose without the page chrome;
// /llms.txt points at these.
const postFiles = (await readdir(postsDir)).filter((f) => f.endsWith('.md'))
for (const file of postFiles) {
  await copyFile(path.join(postsDir, file), path.join(outDir, 'posts', file))
}

console.log(
  `postbuild-og: renamed ${renamed} image(s), ` +
    `published ${postFiles.length} markdown source(s)`
)
