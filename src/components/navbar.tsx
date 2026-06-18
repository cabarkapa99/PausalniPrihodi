"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logos/logo.png"
import { Menu, X } from "lucide-react"

type NavbarProps = {
  siteName: string
  appUrl: string
}

export function Navbar({ siteName, appUrl }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Paušalni Prihodi logo" className="size-9 object-contain" priority />
          <span className="font-mono text-lg font-bold tracking-tight text-foreground">
            {siteName}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {"Funkcije"}
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {"Cene"}
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {"FAQ"}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {"Kontakt"}
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={`${appUrl}/sign-in`}>{"Prijavi se"}</a>
          </Button>
          <Button asChild size="sm">
            <a href={`${appUrl}/sign-up`}>{"Kreiraj nalog besplatno"}</a>
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted md:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-card px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {"Funkcije"}
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {"Cene"}
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {"FAQ"}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {"Kontakt"}
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button asChild variant="outline" size="sm" className="w-full">
                <a href={`${appUrl}/sign-in`}>{"Prijavi se"}</a>
              </Button>
              <Button asChild size="sm" className="w-full">
                <a href={`${appUrl}/sign-up`}>{"Kreiraj nalog besplatno"}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
