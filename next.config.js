/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC compiler for faster builds (optional)
  images: {
    domains: ['example.com'], // Add domains for external images
  },
  // You can add other configurations here
}

module.exports = nextConfig;
