import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { PricingData } from "@/lib/landing-data"

export function Pricing({ heading, subheading, plans }: PricingData) {
  const allPlans = plans ?? []
  const plansWithoutPro = allPlans.filter((plan) => !/pro/i.test(plan.name))
  const freePlan =
    plansWithoutPro.find((plan) => /free|besplat/i.test(plan.name)) ??
    plansWithoutPro[0] ??
    null
  const pricingPlans = freePlan ? [freePlan] : []
  const isSinglePlan = pricingPlans.length === 1

  return (
    <section id="pricing" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1.5"
          >
            {"Cene"}
          </Badge>
          <h2 className="text-pretty font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {heading}
          </h2>
          {subheading ? (
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {subheading}
            </p>
          ) : null}
        </div>

        <div
          className={`mx-auto mt-14 grid gap-6 ${
            isSinglePlan
              ? "max-w-3xl md:grid-cols-1"
              : "max-w-4xl md:grid-cols-2"
          }`}
        >
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-background ${
                isSinglePlan
                  ? "border-primary/30 p-10 shadow-sm ring-1 ring-primary/15"
                  : "border-border p-8"
              }`}
            >
              <div>
                <h3 className="font-mono text-xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-mono text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground">
                    {"RSD"}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 flex-1">
                <ul className={isSinglePlan ? "grid gap-3 md:grid-cols-2" : "space-y-3"}>
                  {plan.features?.map((feature) => (
                    <li key={feature.value} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                variant={isSinglePlan ? "default" : "outline"}
                size="lg"
                className="mt-8 w-full gap-2"
              >
                <Link href={plan.ctaUrl}>
                  {plan.ctaText}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
