/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/test111',
  assetPrefix: '/test111/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig; 