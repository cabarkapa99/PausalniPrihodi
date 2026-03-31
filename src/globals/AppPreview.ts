import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const AppPreview: GlobalConfig = {
  slug: "app-preview",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "eyebrow", label: "Mali naslov", type: "text", required: true },
    { name: "heading", label: "Naslov", type: "text", required: true },
    { name: "description", label: "Opis", type: "textarea", required: true },
    { name: "appUrl", label: "URL aplikacije", type: "text", required: true },
    { name: "ctaText", label: "CTA tekst", type: "text", required: true },
    { name: "ctaUrl", label: "CTA URL", type: "text", required: true },
  ],
};
