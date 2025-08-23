import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'woody.tor1.cdn.digitaloceanspaces.com',
      },
    ],
  },
};

export default nextConfig;
