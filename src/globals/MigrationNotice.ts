import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const MigrationNotice: GlobalConfig = {
  slug: "migration-notice",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "enabled", type: "checkbox", defaultValue: false },
    { name: "heading", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "ctaText", type: "text", required: true },
    { name: "ctaUrl", type: "text", required: true },
  ],
};
