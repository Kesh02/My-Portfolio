/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/My-Portfolio/' : '',
  basePath: isProd ? '/My-Portfolio' : '',
}

module.exports = nextConfig
