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
        source: '/',
        destination: '/articles/pages/1',
        permanent: true,
      },
      {
        source: '/articles',
        destination: '/articles/pages/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
