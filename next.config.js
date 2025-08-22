/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  },
  webpack: (config) => {
    config.externals = [...config.externals, '@prisma/client']
    return config
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig