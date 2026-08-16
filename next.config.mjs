/** @type {import('next').NextConfig} */

// If deploying to https://<user>.github.io/<repo>, set the repo name here
// (or via the NEXT_PUBLIC_BASE_PATH env var) so assets resolve correctly.
// For a user/organization page or a custom domain, leave this empty.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  // Emit a fully static site into `out/` for GitHub Pages.
  output: 'export',
  // GitHub Pages serves each route as a folder with an index.html.
  trailingSlash: true,
  basePath: basePath || undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
