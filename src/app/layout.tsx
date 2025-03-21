import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pausalni Prihodi – Pratite svoje prihode i troškove",
  description:
    "Jednostavan alat za praćenje prihoda i troškova za preduzetnike paušalce u Srbiji. Analizirajte finansije i ostanite u kontroli svog poslovanja.",

  keywords: [
    "Pausalni prihodi",
    "paušalni preduzetnik Srbija",
    "računovodstvo za paušalce",
    "finansijsko upravljanje",
    "praćenje troškova",
    "prihodi i rashodi",
    "knjigovodstvo za paušalce",
    "poslovanje u Srbiji",
  ].join(", "),

  metadataBase: new URL("https://pausalni-prihodi.com"), // Replace with your real URL

  openGraph: {
    title: "Pausalni Prihodi – Pratite vaše poslovne finansije",
    description:
      "Najbolji alat za paušalne preduzetnike u Srbiji. Pratite svoje prihode i rashode lako i efikasno.",
    siteName: "Pausalni Prihodi",
    url: "https://pausalni-prihodi.com",
    type: "website",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with your Open Graph image link
        width: 1200,
        height: 630,
        alt: "Pausalni Prihodi - Pratite svoje prihode i troškove",
      },
    ],
  },

  // Other meta tags
  robots: "index, follow", // Allow search engines to index the site
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.variable} font-sans antialiased `}
          // bg-gradient-to-b from-lime-50 to-green-50
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
