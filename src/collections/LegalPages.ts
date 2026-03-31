import { lexicalEditor } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

import { revalidateLegalPageAfterChange } from "../lib/revalidate.ts";

export const LegalPages: CollectionConfig = {
  slug: "legal-pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["slug", "title", "updatedAt"],
  },
  hooks: {
    afterChange: [revalidateLegalPageAfterChange],
  },
  fields: [
    {
      name: "slug",
      type: "select",
      required: true,
      unique: true,
      options: [
        { label: "Privacy", value: "privacy" },
        { label: "Terms", value: "terms" },
        { label: "Cookies", value: "cookies" },
      ],
    },
    { name: "title", type: "text", required: true },
    { name: "lastModified", type: "date", required: true },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({}),
    },
  ],
};
