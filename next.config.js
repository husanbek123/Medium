/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-static-1.medium.com",
        port: "",
        pathname: "/sites/**",
      },
    ],
  },
};

module.exports = nextConfig;
