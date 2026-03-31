import type { Metadata } from "next"
import Script from "next/script"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { TrustSection } from "@/components/trust-section"
import { AppPreview } from "@/components/app-preview"
import { FeatureDeepDive } from "@/components/feature-deep-dive"
import { SocialProof } from "@/components/social-proof"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { MigrationNotice } from "@/components/migration-notice"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SectionReveal } from "@/components/landing/section-reveal"
import { getHomeData, getSiteSettings, revalidate } from "@/lib/landing-data"
import { SITE_URL } from "@/lib/site"

export { revalidate }

const homeCanonical = new URL("/", SITE_URL).toString()

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()
  const ogImageUrl =
    typeof siteSettings.ogImage === "object" && siteSettings.ogImage?.url
      ? new URL(siteSettings.ogImage.url, SITE_URL).toString()
      : null

  return {
    title: siteSettings.metaTitle,
    description: siteSettings.metaDescription,
    alternates: {
      canonical: homeCanonical,
    },
    openGraph: {
      title: siteSettings.metaTitle,
      description: siteSettings.metaDescription,
      url: homeCanonical,
      siteName: siteSettings.siteName,
      type: "website",
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
    },
    twitter: {
      card: ogImageUrl ? "summary_large_image" : "summary",
      title: siteSettings.metaTitle,
      description: siteSettings.metaDescription,
      images: ogImageUrl ? [ogImageUrl] : [],
    },
  }
}

export default async function Home() {
  const {
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
  } = await getHomeData()
  const siteSettings = await getSiteSettings()
  const faqItems = faq.items ?? []
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSettings.siteName,
    url: SITE_URL,
    email: siteSettings.contactEmail,
  }
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteSettings.siteName,
    url: SITE_URL,
  }
  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteSettings.siteName,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RSD",
    },
  }
  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null

  return (
    <div className="min-h-screen bg-background">
      <Script
        id="home-jsonld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Script
        id="home-jsonld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Script
        id="home-jsonld-software-app"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      {faqJsonLd ? (
        <Script
          id="home-jsonld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <Navbar siteName={siteSettings.siteName} appUrl={siteSettings.appUrl} />
      <main>
        <Hero {...hero} />
        <SectionReveal delayMs={50}>
          <BentoGrid {...features} />
        </SectionReveal>
        <SectionReveal delayMs={70}>
          <TrustSection {...trustSection} />
        </SectionReveal>
        <SectionReveal delayMs={90}>
          <AppPreview {...appPreview} />
        </SectionReveal>
        <SectionReveal delayMs={110}>
          <FeatureDeepDive />
        </SectionReveal>
        <SectionReveal delayMs={130}>
          <SocialProof {...socialProof} />
        </SectionReveal>
        <SectionReveal delayMs={150}>
          <Pricing {...pricing} />
        </SectionReveal>
        <SectionReveal delayMs={170}>
          <FAQ {...faq} />
        </SectionReveal>
        <SectionReveal delayMs={190}>
          <FinalCTA {...finalCta} />
        </SectionReveal>
        {migrationNotice.enabled ? (
          <SectionReveal delayMs={210}>
            <MigrationNotice
              heading={migrationNotice.heading}
              description={migrationNotice.description}
              ctaText={migrationNotice.ctaText}
              ctaUrl={migrationNotice.ctaUrl}
            />
          </SectionReveal>
        ) : null}
        <SectionReveal delayMs={230}>
          <Contact {...contactInfo} />
        </SectionReveal>
      </main>
      <Footer siteName={siteSettings.siteName} />
    </div>
  )
}
