import Link from "next/link";

import { APP_URL } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-xl rounded-2xl border bg-card p-10 text-center">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="mt-2 text-3xl font-bold text-foreground">
          Stranica nije pronađena
        </h1>
        <p className="mt-4 text-muted-foreground">
          Link koji ste otvorili nije validan ili je sadržaj premešten.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Nazad na početnu
          </Link>
          <a
            href={`${APP_URL}/register`}
            className="rounded-md border border-border bg-background px-4 py-2 font-medium text-foreground/85 transition-colors hover:bg-secondary"
          >
            Otvori aplikaciju
          </a>
        </div>
      </div>
    </section>
  );
}
