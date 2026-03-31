import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const FinalCTA: GlobalConfig = {
  slug: "final-cta",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "textarea", required: true },
    { name: "primaryCtaText", type: "text", required: true },
    { name: "primaryCtaUrl", type: "text", required: true },
    { name: "secondaryCtaText", type: "text" },
    { name: "secondaryCtaUrl", type: "text" },
    {
      name: "ctaSubtext",
      label: "Tekst ispod CTA dugmadi",
      type: "text",
    },
  ],
};
