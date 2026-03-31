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
  const page = await getLegalPageBySlug("terms");
  return {
    title: page?.title ?? legalMetadataBySlug.terms.title,
    description: legalDescriptionFromContent(
      page?.content,
      legalMetadataBySlug.terms.description,
    ),
    alternates: { canonical: canonicalForPath(legalMetadataBySlug.terms.path) },
  };
}

export default async function TermsPage() {
  const page = await getLegalPageBySlug("terms");
  return (
    <LegalPage
      title={page?.title ?? legalMetadataBySlug.terms.title}
      lastModified={page?.lastModified}
      content={page?.content ?? emptyLexicalState}
    />
  );
}
