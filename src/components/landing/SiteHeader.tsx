import Link from "next/link";

import { getSiteSettings } from "@/lib/landing-data";

export async function SiteHeader() {
  const site = await getSiteSettings();

  return (
    <header className="border-b bg-background/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-foreground">
          {site.siteName}
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <a
            href={`${site.appUrl}/login`}
            className="rounded-md px-3 py-2 text-foreground/80 transition-colors hover:bg-secondary"
          >
            Prijavi se
          </a>
          <a
            href={`${site.appUrl}/register`}
            className="rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kreiraj nalog besplatno
          </a>
        </nav>
      </div>
    </header>
  );
}
