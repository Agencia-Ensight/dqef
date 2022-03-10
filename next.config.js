/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'api.ts',
    'mdx',
  ],
}

module.exports = nextConfig
