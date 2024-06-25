// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/My-Portfolio/' : '',
  basePath: isProd ? '/My-Portfolio' : '',
  images: {
    unoptimized: true,
  },
  // Ensure this is present if you are exporting a static site
  trailingSlash: true,
};

