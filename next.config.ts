import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Performance optimizations
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Vercel optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-*'],
  },
};

export default nextConfig;
