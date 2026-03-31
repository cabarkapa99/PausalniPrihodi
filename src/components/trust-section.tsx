import { Shield, CheckCircle2, ArrowUpRight } from "lucide-react"
import type { TrustSectionData } from "@/lib/landing-data"

export function TrustSection({ heading, items }: TrustSectionData) {
  const trustItems = items ?? []

  return (
    <section id="trust" className="border-y border-border bg-card py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
            <Shield className="size-7 text-primary" />
          </div>

          <h2 className="mt-6 font-mono text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {heading}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {trustItems.map((item, index) => (
              <div
                key={`${item.value}-${item.label}`}
                className="flex items-start gap-3 rounded-xl border border-border bg-background p-5 text-left"
              >
                {index === trustItems.length - 1 ? (
                  <ArrowUpRight className="mt-0.5 size-5 shrink-0 text-primary" />
                ) : (
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                )}
                <div>
                  <p className="font-mono text-sm font-semibold text-primary">
                    {item.value}
                  </p>
                  <p className="font-medium text-foreground">{item.label}</p>
                  {item.description ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
