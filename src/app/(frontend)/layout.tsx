import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";

import "../globals.css";
import { defaultSiteSettings, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: defaultSiteSettings.metaTitle,
    template: `%s | ${defaultSiteSettings.siteName}`,
  },
  description: defaultSiteSettings.metaDescription,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: defaultSiteSettings.metaTitle,
    description: defaultSiteSettings.metaDescription,
    siteName: defaultSiteSettings.siteName,
    url: SITE_URL,
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSiteSettings.metaTitle,
    description: defaultSiteSettings.metaDescription,
  },
  robots: "index, follow",
};

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
