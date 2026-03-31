import type { CollectionConfig } from "payload";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  admin: {
    useAsTitle: "subject",
    defaultColumns: ["name", "email", "subject", "createdAt"],
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: () => false,
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: "name", type: "text", required: true, label: "Ime i prezime" },
    { name: "email", type: "email", required: true, label: "Email" },
    { name: "subject", type: "text", required: true, label: "Predmet" },
    { name: "message", type: "textarea", required: true, label: "Poruka" },
  ],
};
