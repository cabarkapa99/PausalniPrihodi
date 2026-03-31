import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import sharp from "sharp";

import { ContactSubmissions } from "./src/collections/ContactSubmissions.ts";
import { LegalPages } from "./src/collections/LegalPages.ts";
import { Media } from "./src/collections/Media.ts";
import { Users } from "./src/collections/Users.ts";
import { ContactInfo } from "./src/globals/ContactInfo.ts";
import { AppPreview } from "./src/globals/AppPreview.ts";
import { FAQ } from "./src/globals/FAQ.ts";
import { Features } from "./src/globals/Features.ts";
import { FinalCTA } from "./src/globals/FinalCTA.ts";
import { Hero } from "./src/globals/Hero.ts";
import { MigrationNotice } from "./src/globals/MigrationNotice.ts";
import { Pricing } from "./src/globals/Pricing.ts";
import { SiteSettings } from "./src/globals/SiteSettings.ts";
import { SocialProof } from "./src/globals/SocialProof.ts";
import { TrustSection } from "./src/globals/TrustSection.ts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const payloadSecret = process.env.PAYLOAD_SECRET;

if (!payloadSecret) {
  throw new Error("PAYLOAD_SECRET is required");
}

export default buildConfig({
  sharp,
  editor: lexicalEditor({}),
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname,
      importMapFile: path.resolve(dirname, "src/app/(payload)/admin/importMap.js"),
    },
    components: {
      graphics: {
        Logo: {
          path: "/src/components/payload/Logo.tsx",
        },
        Icon: {
          path: "/src/components/payload/Icon.tsx",
        },
      },
    },
    meta: {
      titleSuffix: " | Paušalni Prihodi Admin",
    },
  },
  collections: [Users, Media, ContactSubmissions, LegalPages],
  globals: [
    SiteSettings,
    Hero,
    Features,
    TrustSection,
    AppPreview,
    SocialProof,
    Pricing,
    FAQ,
    FinalCTA,
    MigrationNotice,
    ContactInfo,
  ],
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  secret: payloadSecret,
});
