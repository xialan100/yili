import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/yili",
  basePath: "/yili",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_ASSET_PREFIX: "/yili",
  },
};

export default nextConfig;
