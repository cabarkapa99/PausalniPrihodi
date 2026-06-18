import {
  FileText,
  Gauge,
  Bell,
  Users,
  Globe,
  TrendingUp,
  Repeat,
  QrCode,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { FeaturesData } from "@/lib/landing-data"

const iconMap = {
  FileText,
  Gauge,
  Bell,
  Users,
  Globe,
  TrendingUp,
  Repeat,
  QrCode,
}

export function BentoGrid({ heading, items }: FeaturesData) {
  const featureItems = items ?? []

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1.5"
          >
            {"Zašto mi?"}
          </Badge>
          <h2 className="text-pretty font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:auto-rows-[220px]">
          {featureItems.map((feature, index) => {
            const Icon =
              feature.iconName && feature.iconName in iconMap
                ? iconMap[feature.iconName as keyof typeof iconMap]
                : FileText
            const highlight = index === 0
            const className = highlight
              ? "md:col-span-2 md:row-span-2"
              : "md:col-span-1"

            return (
              <div
                key={feature.title}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:shadow-md ${
                  highlight
                    ? "border-primary/20 bg-primary/[0.03]"
                    : "border-border"
                } ${className}`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-10 items-center justify-center rounded-xl ${
                        highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <h3 className="mt-4 font-mono text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                {highlight && (
                  <div className="mt-6 rounded-xl border border-border bg-card p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground">
                          {"Faktura #2024-0042"}
                        </p>
                        <p className="mt-0.5 font-mono text-sm font-semibold text-foreground">
                          {"Marko Petrović"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">{"Iznos"}</p>
                        <p className="font-mono text-sm font-bold text-primary">
                          {"€1,250.00"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-3/4 rounded-full bg-primary" />
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {"75% limita iskorišćeno"}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
