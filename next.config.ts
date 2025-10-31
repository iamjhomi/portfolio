import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  // Use static export and basePath only in production (for GitHub Pages).
  // During local development leave these unset so dev server serves at /
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // No basePath in dev: we'll add a local route at /portfolio so the app can be
  // previewed at the same path as GitHub Pages without using Next's basePath.
  // (Keeps local dev simpler and avoids basePath-related 404s.)
  // basePath: '/portfolio',
  // Ensure Turbopack uses this project directory as the workspace root
  // This prevents Next from inferring a parent directory as the root
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Redirect accidental double-basePath requests to the single basePath.
  // No custom redirects here — local dev will use the app/portfolio route.
};

export default nextConfig;
