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
  const page = await getLegalPageBySlug("cookies");
  return {
    title: page?.title ?? legalMetadataBySlug.cookies.title,
    description: legalDescriptionFromContent(
      page?.content,
      legalMetadataBySlug.cookies.description,
    ),
    alternates: { canonical: canonicalForPath(legalMetadataBySlug.cookies.path) },
  };
}

export default async function CookiesPage() {
  const page = await getLegalPageBySlug("cookies");
  return (
    <LegalPage
      title={page?.title ?? legalMetadataBySlug.cookies.title}
      lastModified={page?.lastModified}
      content={page?.content ?? emptyLexicalState}
    />
  );
}
