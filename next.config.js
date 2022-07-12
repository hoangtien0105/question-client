/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, {isServer}) {
    

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });


    return config;
  },
  devIndicators: {
    buildActivity: true
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
