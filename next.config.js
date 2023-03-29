/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  images: {
    domains: ["images.unsplash.com", "assets.stickpng.com"],
  },
};

module.exports = nextConfig;
