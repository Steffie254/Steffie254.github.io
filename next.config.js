/** @type {import('next').NextConfig} */
// Static export: deploys to Vercel, Netlify or GitHub Pages as plain files.
// For GitHub Pages at steffie254.github.io/<repo>, set NEXT_PUBLIC_BASE_PATH=/<repo> at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const nextConfig = {
  output: 'export',
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
}
module.exports = nextConfig
