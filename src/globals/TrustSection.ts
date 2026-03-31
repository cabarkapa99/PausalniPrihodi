import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const TrustSection: GlobalConfig = {
  slug: "trust-section",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "heading", type: "text", required: true },
    {
      name: "items",
      type: "array",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
        { name: "description", type: "textarea" },
      ],
    },
  ],
};
