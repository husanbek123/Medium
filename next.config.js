/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn-static-1.medium.com", "miro.medium.com"],
  },
};

module.exports = nextConfig;
