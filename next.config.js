/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
