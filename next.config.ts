import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Fresc",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
