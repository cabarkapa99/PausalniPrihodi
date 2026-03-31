import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const SocialProof: GlobalConfig = {
  slug: "social-proof",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "heading", type: "text", required: true },
    {
      name: "testimonials",
      type: "array",
      fields: [
        { name: "name", type: "text", required: true },
        { name: "role", type: "text", required: true },
        { name: "text", type: "textarea", required: true },
        { name: "rating", type: "number", min: 1, max: 5, defaultValue: 5 },
      ],
    },
  ],
};
