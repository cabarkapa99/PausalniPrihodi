import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const Pricing: GlobalConfig = {
  slug: "pricing",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "textarea" },
    {
      name: "plans",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "price", type: "text", required: true },
        { name: "period", type: "text" },
        {
          name: "features",
          type: "array",
          fields: [{ name: "value", type: "text", required: true }],
        },
        { name: "ctaText", type: "text", required: true },
        { name: "ctaUrl", type: "text", required: true },
      ],
    },
  ],
};
