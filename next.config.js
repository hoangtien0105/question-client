/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: true
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
