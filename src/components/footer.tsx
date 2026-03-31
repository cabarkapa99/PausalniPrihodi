import Image from "next/image"
import Link from "next/link"

import logo from "@/assets/logos/logo.png"

type FooterProps = {
  siteName: string
}

export function Footer({ siteName }: FooterProps) {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Paušalni Prihodi logo" className="size-8 object-contain" />
            <span className="font-mono text-sm font-bold text-foreground">
              {siteName}
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {"Uslovi korišćenja"}
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {"Privatnost"}
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {"Kolačići"}
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            {`© ${new Date().getFullYear()} ${siteName}. Sva prava zadržana. `}
            <a
              href="https://uwit.rs"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-primary/40 underline-offset-4 transition-colors hover:text-foreground"
            >
              Made by UWIT
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
