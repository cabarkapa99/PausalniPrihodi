import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Database, RefreshCcw } from "lucide-react"
import Link from "next/link"

type MigrationNoticeProps = {
  heading: string
  description: string
  ctaText: string
  ctaUrl: string
}

export function MigrationNotice({
  heading,
  description,
  ctaText,
  ctaUrl,
}: MigrationNoticeProps) {
  return (
    <section id="migration-notice" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.03]">
          <div className="p-8 md:p-10">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
              <div className="mb-4 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 sm:mb-0 sm:mr-6">
                <Database className="size-7 text-primary" />
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <Badge
                    variant="secondary"
                    className="gap-1 rounded-full px-3 py-1"
                  >
                    <RefreshCcw className="size-3" />
                    {"Postojeći korisnici"}
                  </Badge>
                </div>
                <h3 className="mt-3 font-mono text-xl font-bold text-foreground md:text-2xl">
                  {heading}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {description}
                </p>
                <Button asChild className="mt-6 gap-2" size="lg">
                  <Link href={ctaUrl}>
                    {ctaText}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
