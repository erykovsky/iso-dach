import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 experimental: {
  dynamicIO: true,
  reactCompiler: true,
  ppr: true,
 },
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
    port: "",
    pathname: "/**",
    search: "",
   },
  ],
 },
};

export default nextConfig;
