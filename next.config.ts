import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "MultiMian-Sleekly";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;
