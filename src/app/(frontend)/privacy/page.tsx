import type { Metadata } from "next";

import { LegalPage } from "@/components/landing/LegalPage";
import {
  canonicalForPath,
  emptyLexicalState,
  getLegalPageBySlug,
  legalDescriptionFromContent,
  legalMetadataBySlug,
} from "@/lib/landing-data";

export const revalidate = 43200;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getLegalPageBySlug("privacy");
  return {
    title: page?.title ?? legalMetadataBySlug.privacy.title,
    description: legalDescriptionFromContent(
      page?.content,
      legalMetadataBySlug.privacy.description,
    ),
    alternates: { canonical: canonicalForPath(legalMetadataBySlug.privacy.path) },
  };
}

export default async function PrivacyPage() {
  const page = await getLegalPageBySlug("privacy");
  return (
    <LegalPage
      title={page?.title ?? legalMetadataBySlug.privacy.title}
      lastModified={page?.lastModified}
      content={page?.content ?? emptyLexicalState}
    />
  );
}
