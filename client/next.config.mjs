/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export const images = {
  domains: [
    "images.unsplash.com",
    "pbs.twimg.com"
  ],
};

export default nextConfig;
