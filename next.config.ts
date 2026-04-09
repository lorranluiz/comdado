import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/comdado",
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
