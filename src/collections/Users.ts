import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "role"],
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "superadmin",
      options: [{ label: "Superadmin", value: "superadmin" }],
      access: {
        create: () => false,
        update: () => false,
      },
    },
  ],
};
