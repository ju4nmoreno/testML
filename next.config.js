/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "http2.mlstatic.com",
      },
    ],
  },
};

module.exports = nextConfig;
