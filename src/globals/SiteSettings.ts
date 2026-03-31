import type { GlobalConfig } from "payload";

import { revalidateLayoutAfterSiteSettingsChange } from "../lib/revalidate.ts";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  hooks: {
    afterChange: [revalidateLayoutAfterSiteSettingsChange],
  },
  fields: [
    { name: "siteName", type: "text", required: true },
    { name: "appUrl", type: "text", required: true },
    { name: "contactEmail", type: "email", required: true },
    { name: "contactPhone", type: "text" },
    { name: "metaTitle", type: "text", required: true },
    { name: "metaDescription", type: "textarea", required: true },
    {
      name: "ogImage",
      type: "upload",
      relationTo: "media",
    },
  ],
};
