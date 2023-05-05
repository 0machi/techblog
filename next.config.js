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
        destination: '/blogs/pages/1',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blogs/pages/1',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
