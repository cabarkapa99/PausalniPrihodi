import { cache } from "react";
import net from "node:net";
import type { SerializedEditorState, SerializedLexicalNode } from "lexical";

import { getPayloadClient } from "@/lib/payload";
import { APP_URL, defaultSiteSettings, SITE_URL } from "@/lib/site";

export const revalidate = 43200;

export type SiteSettingsData = {
  siteName: string;
  appUrl: string;
  contactEmail: string;
  contactPhone?: string;
  metaTitle: string;
  metaDescription: string;
  ogImage?: number | { url?: string | null } | null;
};

export type HeroData = {
  badgeText?: string | null;
  heading: string;
  subheading: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText: string;
  secondaryCtaUrl: string;
  ctaSubtext?: string | null;
  stats?: Array<{ value: string; label: string }> | null;
};

export type FeaturesData = {
  heading: string;
  items: Array<{ iconName?: string | null; title: string; description: string }>;
};

export type TrustSectionData = {
  heading: string;
  items?: Array<{ value: string; label: string; description?: string | null }> | null;
};

export type AppPreviewData = {
  eyebrow: string;
  heading: string;
  description: string;
  appUrl: string;
  ctaText: string;
  ctaUrl: string;
};

export type SocialProofData = {
  heading: string;
  testimonials?: Array<{
    name: string;
    role: string;
    text: string;
    rating?: number | null;
  }> | null;
};

export type PricingData = {
  heading: string;
  subheading?: string | null;
  plans?: Array<{
    name: string;
    price: string;
    period?: string | null;
    features?: Array<{ value: string }> | null;
    ctaText: string;
    ctaUrl: string;
  }> | null;
};

export type FAQData = {
  heading: string;
  items?: Array<{ question: string; answer: string }> | null;
};

export type FinalCTAData = {
  heading: string;
  subheading: string;
  primaryCtaText: string;
  primaryCtaUrl: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  ctaSubtext?: string | null;
};

export type MigrationNoticeData = {
  enabled: boolean;
  heading: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
};

export type ContactInfoData = {
  heading: string;
  subheading: string;
  email: string;
  liveChatHours?: string | null;
};

let payloadConnectionWarningPrinted = false;
let skipPayloadUntil = 0;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const canReachPostgres = async () => {
  const conn = process.env.DATABASE_URL;
  if (!conn) return false;

  try {
    const url = new URL(conn);
    const host = url.hostname || "127.0.0.1";
    const port = Number(url.port || "5432");

    const ok = await new Promise<boolean>((resolve) => {
      const socket = net.createConnection({ host, port });
      const done = (value: boolean) => {
        socket.removeAllListeners();
        socket.destroy();
        resolve(value);
      };

      socket.once("connect", () => done(true));
      socket.once("error", () => done(false));
      socket.setTimeout(250, () => done(false));
    });

    return ok;
  } catch {
    return false;
  }
};

const getPayloadClientSafe = async () => {
  if (Date.now() < skipPayloadUntil) {
    return null;
  }

  const postgresReachable = await canReachPostgres();
  if (!postgresReachable) {
    skipPayloadUntil = Date.now() + 30000;
    if (!payloadConnectionWarningPrinted) {
      payloadConnectionWarningPrinted = true;
      console.warn(
        "Postgres is unreachable. Using static landing fallbacks until DB is available.",
      );
    }
    return null;
  }

  try {
    return await getPayloadClient();
  } catch {
    skipPayloadUntil = Date.now() + 30000;
    if (!payloadConnectionWarningPrinted) {
      payloadConnectionWarningPrinted = true;
      console.warn(
        "Payload is unavailable. Falling back to static landing defaults.",
      );
    }
    await sleep(0);
    return null;
  }
};

export const getSiteSettings = cache(async () => {
  const payload = await getPayloadClientSafe();
  if (!payload) {
    return defaultSiteSettings as SiteSettingsData;
  }

  try {
    return (await payload.findGlobal({
      slug: "site-settings",
      depth: 1,
    })) as SiteSettingsData;
  } catch {
    return defaultSiteSettings as SiteSettingsData;
  }
});

export const getHomeData = cache(async () => {
  const payload = await getPayloadClientSafe();

  const [
    hero,
    features,
    trustSection,
    appPreview,
    socialProof,
    pricing,
    faq,
    finalCta,
    migrationNotice,
    contactInfo,
  ] = payload
    ? await Promise.all([
        payload.findGlobal({ slug: "hero" }).catch(() => null),
        payload.findGlobal({ slug: "features" }).catch(() => null),
        payload.findGlobal({ slug: "trust-section" }).catch(() => null),
        payload.findGlobal({ slug: "app-preview" }).catch(() => null),
        payload.findGlobal({ slug: "social-proof" }).catch(() => null),
        payload.findGlobal({ slug: "pricing" }).catch(() => null),
        payload.findGlobal({ slug: "faq" }).catch(() => null),
        payload.findGlobal({ slug: "final-cta" }).catch(() => null),
        payload.findGlobal({ slug: "migration-notice" }).catch(() => null),
        payload.findGlobal({ slug: "contact-info" }).catch(() => null),
      ])
    : [null, null, null, null, null, null, null, null, null, null];

  return {
    hero:
      hero ??
      ({
        badgeText: "Paušalni preduzetnici",
        heading: "Paušalni Prihodi na jednom mestu",
        subheading:
          "Pratite finansije, upravljajte obavezama i ostanite fokusirani na posao.",
        primaryCtaText: "Kreiraj nalog besplatno",
        primaryCtaUrl: `${APP_URL}/register`,
        secondaryCtaText: "Prijavi se",
        secondaryCtaUrl: `${APP_URL}/login`,
        ctaSubtext: "Besplatno zauvek. Bez kartice. Bez caka.",
        stats: [
          { value: "10k+", label: "obrađenih unosa" },
          { value: "99.9%", label: "dostupnost servisa" },
          { value: "24/7", label: "pristup podacima" },
        ],
      } as HeroData),
    features:
      features ??
      ({
        heading: "Sve što vam treba za jasan pregled poslovanja",
        items: [
          {
            title: "Praćenje prihoda",
            description: "Brz unos i pregled prometa po periodima.",
          },
          {
            title: "Porezi i obaveze",
            description: "Uvek znate kada i koliko treba da platite.",
          },
          {
            title: "Izveštaji",
            description: "Pregledni podaci za bolje finansijske odluke.",
          },
        ],
      } as FeaturesData),
    trustSection:
      trustSection ??
      ({
        heading: "Zašto preduzetnici biraju Paušalni Prihodi",
        items: [
          { value: "3x", label: "brži unos", description: "Manje ručnog rada." },
          {
            value: "0",
            label: "izgubljenih podataka",
            description: "Pouzdano čuvanje i pregled istorije.",
          },
          {
            value: "1 mesto",
            label: "za sve obaveze",
            description: "Prihodi, status i planiranje.",
          },
        ],
      } as TrustSectionData),
    appPreview:
      appPreview ??
      ({
        eyebrow: "Pogledajte aplikaciju",
        heading: "Sve na jednom mestu, dizajnirano za vas",
        description:
          "Čist, intuitivan interfejs koji vam štedi vreme. Evo kako izgleda vaš svakodnevni rad.",
        appUrl: APP_URL,
        ctaText: "Kreiraj nalog",
        ctaUrl: `${APP_URL}/register`,
      } as AppPreviewData),
    socialProof:
      socialProof ??
      ({
        heading: "Šta kažu korisnici",
        testimonials: [
          {
            name: "Marko",
            role: "IT preduzetnik",
            text: "Napokon jasno vidim mesečni promet i obaveze.",
            rating: 5,
          },
          {
            name: "Jelena",
            role: "Dizajner",
            text: "Intuitivan interfejs i odličan pregled izveštaja.",
            rating: 5,
          },
        ],
      } as SocialProofData),
    pricing:
      pricing ??
      ({
        heading: "Počnite besplatno, bez komplikacija",
        subheading: "Sve što vam treba da krenete odmah - potpuno besplatno.",
        plans: [
          {
            name: "Besplatan",
            price: "0",
            period: "",
            features: [
              { value: "Neograničen broj unosa" },
              { value: "Praćenje limita od 6M RSD" },
              { value: "Domaće i inostrane fakture" },
            ],
            ctaText: "Počni besplatno",
            ctaUrl: `${APP_URL}/register`,
          },
        ],
      } as PricingData),
    faq:
      faq ??
      ({
        heading: "Česta pitanja",
        items: [
          {
            question: "Da li mogu da koristim alat odmah nakon registracije?",
            answer:
              "Da. Nakon registracije dobijate trenutni pristup svim osnovnim funkcionalnostima.",
          },
          {
            question: "Da li je servis prilagođen paušalnim preduzetnicima?",
            answer:
              "Da, aplikacija je fokusirana na potrebe paušalnih preduzetnika u Srbiji.",
          },
        ],
      } as FAQData),
    finalCta:
      finalCta ??
      ({
        heading: "Počnite danas bez komplikacija",
        subheading:
          "Kreirajte nalog i steknite potpunu kontrolu nad svojim poslovnim podacima.",
        primaryCtaText: "Kreiraj besplatni nalog",
        primaryCtaUrl: `${APP_URL}/register`,
        secondaryCtaText: "Prijavi se na novi nalog",
        secondaryCtaUrl: `${APP_URL}/login`,
        ctaSubtext: "Bez kreditne kartice. Registracija za 30 sekundi.",
      } as FinalCTAData),
    migrationNotice:
      migrationNotice ??
      ({
        enabled: false,
        heading: "Novi sajt i unapređen CMS",
        description:
          "Sadržaj sajta je sada potpuno upravljiv kroz admin panel, uz brže osvežavanje strana.",
        ctaText: "Pogledaj kako radi",
        ctaUrl: "#deep-dive",
      } as MigrationNoticeData),
    contactInfo:
      contactInfo ??
      ({
        heading: "Javite nam se",
        subheading: "Odgovaramo brzo na sva pitanja vezana za servis.",
        email: defaultSiteSettings.contactEmail,
        liveChatHours: "Pon - Pet: 09:00 - 17:00",
      } as ContactInfoData),
  };
});

export const getLegalPageBySlug = cache(async (slug: string) => {
  const payload = await getPayloadClientSafe();
  if (!payload) {
    return null;
  }

  try {
    const result = await payload.find({
      collection: "legal-pages",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    return result.docs[0] ?? null;
  } catch {
    return null;
  }
});

export const legalMetadataBySlug: Record<
  string,
  { title: string; description: string; path: string }
> = {
  privacy: {
    title: "Politika privatnosti",
    description: "Informacije o obradi i zaštiti podataka o ličnosti.",
    path: "/privacy",
  },
  terms: {
    title: "Uslovi korišćenja",
    description: "Uslovi pod kojima koristite servis Paušalni Prihodi.",
    path: "/terms",
  },
  cookies: {
    title: "Politika kolačića",
    description: "Kako i zašto koristimo kolačiće na sajtu.",
    path: "/cookies",
  },
};

export const canonicalForPath = (path: string) => `${SITE_URL}${path}`;

export const legalDescriptionFromContent = (content: unknown, fallback: string) => {
  if (!content || typeof content !== "object") return fallback;

  const root = (content as { root?: { children?: Array<{ children?: Array<{ text?: string }> }> } })
    .root;
  const firstParagraph = root?.children?.[0];
  const text = firstParagraph?.children
    ?.map((node) => node.text ?? "")
    .join(" ")
    .trim();

  if (!text) return fallback;
  return text.length > 160 ? `${text.slice(0, 157)}...` : text;
};

const rawEmptyLexicalState = {
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    direction: null,
    children: [
      {
        type: "paragraph",
        format: "",
        indent: 0,
        version: 1,
        direction: null,
        children: [
          {
            type: "text",
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Sadržaj uskoro.",
            version: 1,
          },
        ],
      },
    ],
  },
};

export const emptyLexicalState =
  rawEmptyLexicalState as unknown as SerializedEditorState<SerializedLexicalNode>;
