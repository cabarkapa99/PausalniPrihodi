import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const Hero: GlobalConfig = {
  slug: "hero",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "badgeText", type: "text" },
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "textarea", required: true },
    { name: "primaryCtaText", type: "text", required: true },
    { name: "primaryCtaUrl", type: "text", required: true },
    { name: "secondaryCtaText", type: "text", required: true },
    { name: "secondaryCtaUrl", type: "text", required: true },
    {
      name: "ctaSubtext",
      label: "Tekst ispod CTA dugmadi",
      type: "text",
    },
    {
      name: "stats",
      type: "array",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
  ],
};
