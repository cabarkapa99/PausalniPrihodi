import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // Emit a self-contained server bundle so the Docker runtime image stays small.
  output: "standalone",
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
