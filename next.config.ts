import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pausalni-prihodi.com",
      },
      {
        protocol: "https",
        hostname: "app.pausalni-prihodi.com",
      },
    ],
  },
};

export default withPayload(nextConfig);
