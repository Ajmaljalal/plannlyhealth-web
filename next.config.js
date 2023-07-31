/** @type {import('next').NextConfig} */
// const withPWA = require('@imbios/next-pwa')({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   // disable: process.env.NODE_ENV === 'development'
// })

const nextConfig = {
  images: {
    minimumCacheTTL: 10000,
  },
}

module.exports = nextConfig
