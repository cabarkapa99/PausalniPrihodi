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
  const page = await getLegalPageBySlug("refund");
  return {
    title: page?.title ?? legalMetadataBySlug.refund.title,
    description: legalDescriptionFromContent(
      page?.content,
      legalMetadataBySlug.refund.description,
    ),
    alternates: { canonical: canonicalForPath(legalMetadataBySlug.refund.path) },
  };
}

export default async function RefundPage() {
  const page = await getLegalPageBySlug("refund");
  return (
    <LegalPage
      title={page?.title ?? legalMetadataBySlug.refund.title}
      lastModified={page?.lastModified}
      content={page?.content ?? emptyLexicalState}
    />
  );
}
