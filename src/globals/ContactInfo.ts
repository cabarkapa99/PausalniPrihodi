import type { GlobalConfig } from "payload";

import { revalidateHomeAfterGlobalChange } from "../lib/revalidate.ts";

export const ContactInfo: GlobalConfig = {
  slug: "contact-info",
  hooks: {
    afterChange: [revalidateHomeAfterGlobalChange],
  },
  fields: [
    { name: "heading", type: "text", required: true },
    { name: "subheading", type: "textarea", required: true },
    { name: "email", type: "email", required: true },
    { name: "liveChatHours", type: "text" },
  ],
};
