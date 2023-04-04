/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
    images: {
    minimumCacheTTL: 10000,
  },
}

module.exports = nextConfig
