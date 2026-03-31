import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import type { HeroData } from "@/lib/landing-data"

export function Hero({
  badgeText,
  heading,
  subheading,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
  ctaSubtext,
  stats,
}: HeroData) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,var(--color-primary)/8,transparent)]" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {badgeText ? (
            <Badge
              variant="secondary"
              className="mb-6 gap-1.5 rounded-full px-4 py-1.5 text-sm"
            >
              <Sparkles className="size-3.5" />
              {badgeText}
            </Badge>
          ) : null}

          <h1 className="text-pretty font-mono text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {heading}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {subheading}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 px-8 text-base">
              <Link href={primaryCtaUrl}>
                {primaryCtaText}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 text-base">
              <Link href={secondaryCtaUrl}>{secondaryCtaText}</Link>
            </Button>
          </div>

          {ctaSubtext ? (
            <p className="mt-6 text-sm text-muted-foreground">{ctaSubtext}</p>
          ) : null}
        </div>

        {/* Floating stats */}
        {stats?.length ? (
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
            {stats.slice(0, 3).map((stat, index) => (
              <div
                key={`${stat.value}-${stat.label}`}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span
                  className={`font-mono text-2xl font-bold md:text-3xl ${
                    index === 1 ? "text-primary" : "text-foreground"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
