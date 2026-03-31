import Link from "next/link";
import { getSiteSettings } from "@/lib/landing-data";

export async function SiteFooter() {
  const site = await getSiteSettings();
  return (
    <footer className="border-t bg-card">
      <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.siteName}
        </p>
        <nav className="flex gap-4">
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privatnost
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Uslovi korišćenja
          </Link>
          <Link href="/cookies" className="transition-colors hover:text-foreground">
            Kolačići
          </Link>
        </nav>
      </div>
    </footer>
  );
}
