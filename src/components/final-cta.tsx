import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

type FinalCTAProps = {
  heading: string
  subheading: string
  primaryCtaText: string
  primaryCtaUrl: string
  secondaryCtaText?: string | null
  secondaryCtaUrl?: string | null
  ctaSubtext?: string | null
}

export function FinalCTA({
  heading,
  subheading,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
  ctaSubtext,
}: FinalCTAProps) {
  return (
    <section id="final-cta" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center md:px-16 md:py-20">
          <h2 className="text-pretty font-mono text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            {subheading}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-primary-foreground px-8 text-base text-primary hover:bg-primary-foreground/90"
            >
              <Link href={primaryCtaUrl}>
                {primaryCtaText}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            {secondaryCtaText && secondaryCtaUrl ? (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href={secondaryCtaUrl}>{secondaryCtaText}</Link>
              </Button>
            ) : null}
          </div>
          {ctaSubtext ? (
            <p className="mt-6 text-sm text-primary-foreground/60">{ctaSubtext}</p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
