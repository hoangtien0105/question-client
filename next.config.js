/** @type {import('next').NextConfig} */
const nextConfig = {

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  env: {
    BASEURL : 'http://localhost:2727/api/v1'
  },
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
  staticPageGenerationTimeout: 1000,
}

module.exports = nextConfig
