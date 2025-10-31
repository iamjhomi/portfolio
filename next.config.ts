import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Use basePath only in production (when hosted on GitHub Pages). This keeps
  // local development simple (served at `/`) so you don't get a 404 at the root.
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // Ensure Turbopack uses this project directory as the workspace root
  // This prevents Next from inferring a parent directory as the root
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
