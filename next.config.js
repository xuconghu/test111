/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/test111',
  assetPrefix: '/test111',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  publicRuntimeConfig: {
    basePath: '/test111',
    assetPrefix: '/test111',
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.output.publicPath = '/test111/_next/';
    }
    return config;
  },
};

module.exports = nextConfig;