import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const Features: GlobalConfig = {
  slug: "features",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "heading", type: "text", required: true },
    {
      name: "items",
      type: "array",
      required: true,
      fields: [
        { name: "iconName", type: "text" },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
