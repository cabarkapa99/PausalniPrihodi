import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export const revalidate = 43200;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/privacy", "/terms", "/cookies"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
}
