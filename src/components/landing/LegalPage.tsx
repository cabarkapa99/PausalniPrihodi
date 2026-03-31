import Link from "next/link";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState, SerializedLexicalNode } from "lexical";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getSiteSettings } from "@/lib/landing-data";

type LegalPageProps = {
  title: string;
  lastModified?: string | Date | null;
  content: SerializedEditorState<SerializedLexicalNode>;
};

type LexicalNodeLike = {
  type?: string;
  text?: string;
  children?: LexicalNodeLike[];
};

const SECTION_HEADING_RE = /^\d+\.\s+/;
const SUBSECTION_HEADING_RE = /^\d+\.\d+\s+/;
const LAST_MODIFIED_RE = /^Poslednja izmena:/i;
const CONTACT_LINE_RE = /^(Email|Telefon):/i;

const collectNodeText = (node: LexicalNodeLike): string => {
  if (typeof node.text === "string") {
    return node.text;
  }

  if (!Array.isArray(node.children)) {
    return "";
  }

  return node.children.map(collectNodeText).join("");
};

const extractParagraphs = (
  state: SerializedEditorState<SerializedLexicalNode>,
): string[] => {
  const root = state?.root as LexicalNodeLike | undefined;
  if (!root || !Array.isArray(root.children)) {
    return [];
  }

  return root.children
    .filter((node) => node?.type === "paragraph")
    .map((node) => collectNodeText(node).trim())
    .filter(Boolean);
};

const hasNonParagraphContent = (
  state: SerializedEditorState<SerializedLexicalNode>,
): boolean => {
  const root = state?.root as LexicalNodeLike | undefined;
  if (!root || !Array.isArray(root.children)) {
    return false;
  }

  return root.children.some((node) => node?.type !== "paragraph");
};

export async function LegalPage({ title, lastModified, content }: LegalPageProps) {
  const siteSettings = await getSiteSettings();
  const paragraphs = extractParagraphs(content);
  const useSmartFormatting =
    paragraphs.length > 0 && !hasNonParagraphContent(content);

  const formattedParagraphs: ReactNode[] = [];

  if (useSmartFormatting) {
    for (const [index, text] of paragraphs.entries()) {
      const isSectionHeading = SECTION_HEADING_RE.test(text);
      const isSubsectionHeading = SUBSECTION_HEADING_RE.test(text);
      const isLastModifiedLine = LAST_MODIFIED_RE.test(text);
      const isLeadIn = text.endsWith(":");
      const isContactLine = CONTACT_LINE_RE.test(text);

      if (isSectionHeading) {
        formattedParagraphs.push(
          <h2
            key={`heading-${index}`}
            className="mt-8 text-xl font-semibold leading-tight text-foreground first:mt-0"
          >
            {text}
          </h2>,
        );
        continue;
      }

      if (isSubsectionHeading) {
        formattedParagraphs.push(
          <h3
            key={`subheading-${index}`}
            className="mt-5 text-base font-semibold leading-tight text-foreground/90"
          >
            {text}
          </h3>,
        );
        continue;
      }

      if (isLastModifiedLine) {
        // Skip duplicated in-body "Poslednja izmena" line.
        continue;
      }

      if (isLeadIn) {
        formattedParagraphs.push(
          <p key={`lead-${index}`} className="mt-4 font-medium text-foreground/90">
            {text}
          </p>,
        );
        continue;
      }

      formattedParagraphs.push(
        <p
          key={`paragraph-${index}`}
          className={`mt-4 leading-7 text-muted-foreground ${
            isContactLine ? "font-medium text-foreground/90" : ""
          }`}
        >
          {text}
        </p>,
      );
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar siteName={siteSettings.siteName} appUrl={siteSettings.appUrl} />
      <section className="container py-12">
        <div className="mx-auto max-w-4xl rounded-2xl border bg-card p-8 shadow-sm">
          <Link href="/" className="mb-4 inline-block text-sm text-primary transition-colors hover:text-primary/80">
            ← Nazad na početnu
          </Link>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Poslednja izmena:{" "}
            {lastModified
              ? new Date(lastModified).toLocaleDateString("sr-RS")
              : new Date().toLocaleDateString("sr-RS")}
          </p>
          <div className="mt-8">
            {useSmartFormatting ? (
              <div>{formattedParagraphs}</div>
            ) : (
              <div className="prose max-w-none">
                <RichText data={content} />
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer siteName={siteSettings.siteName} />
    </div>
  );
}
