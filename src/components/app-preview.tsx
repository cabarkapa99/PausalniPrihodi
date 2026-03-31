"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { AppPreviewData } from "@/lib/landing-data"
import {
  FileText,
  Users,
  Gauge,
  TrendingUp,
  Plus,
  Search,
  Bell,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Send,
  Clock,
  CheckCircle2,
} from "lucide-react"

function DashboardPreview() {
  return (
    <div className="flex h-full flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="size-7 rounded-lg bg-primary" />
          <span className="font-mono text-xs font-bold text-foreground">
            {"Paušalni Prihodi"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-muted">
            <Search className="size-3.5 text-muted-foreground" />
          </div>
          <div className="relative flex size-7 items-center justify-center rounded-md bg-muted">
            <Bell className="size-3.5 text-muted-foreground" />
            <div className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-primary" />
          </div>
          <div className="size-7 rounded-full bg-primary/20" />
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="hidden w-44 shrink-0 border-r border-border/60 p-3 md:block">
          <nav className="flex flex-col gap-0.5">
            {[
              { icon: Gauge, label: "Pregled", active: true },
              { icon: FileText, label: "Fakture", active: false },
              { icon: Users, label: "Klijenti", active: false },
              { icon: TrendingUp, label: "Izveštaji", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs ${
                  item.active
                    ? "bg-primary/10 font-semibold text-primary"
                    : "text-muted-foreground"
                }`}
              >
                <item.icon className="size-3.5" />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden p-4 md:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">{"Dobrodošli nazad,"}</p>
              <p className="font-mono text-sm font-bold text-foreground">
                {"Marko Jovanovic"}
              </p>
            </div>
            <Button size="sm" className="h-7 gap-1 px-2.5 text-xs">
              <Plus className="size-3" />
              {"Nova faktura"}
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-border/60 bg-background p-3">
              <p className="text-[10px] text-muted-foreground">{"Ukupni prihod"}</p>
              <p className="mt-0.5 font-mono text-sm font-bold text-foreground">
                {"3,450,000"}
              </p>
              <div className="mt-1 flex items-center gap-0.5">
                <ArrowUpRight className="size-2.5 text-primary" />
                <span className="text-[10px] font-medium text-primary">
                  {"+12.5%"}
                </span>
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-background p-3">
              <p className="text-[10px] text-muted-foreground">{"Iskorišćen limit"}</p>
              <p className="mt-0.5 font-mono text-sm font-bold text-foreground">
                {"57.5%"}
              </p>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[57.5%] rounded-full bg-primary" />
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-background p-3">
              <p className="text-[10px] text-muted-foreground">{"Neplaćene"}</p>
              <p className="mt-0.5 font-mono text-sm font-bold text-foreground">
                {"3"}
              </p>
              <div className="mt-1 flex items-center gap-0.5">
                <ArrowDownRight className="size-2.5 text-destructive" />
                <span className="text-[10px] font-medium text-destructive">
                  {"380,000 RSD"}
                </span>
              </div>
            </div>
          </div>

          {/* Recent invoices */}
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground">
                {"Nedavne fakture"}
              </p>
              <span className="text-[10px] text-muted-foreground">
                {"Prikaži sve"}
              </span>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              {[
                {
                  client: "TechSerbia d.o.o.",
                  number: "#2024-0042",
                  amount: "150,000 RSD",
                  status: "paid",
                  statusLabel: "Plaćeno",
                },
                {
                  client: "Acme GmbH",
                  number: "#2024-INT-018",
                  amount: "€1,250.00",
                  status: "sent",
                  statusLabel: "Poslato",
                },
                {
                  client: "NovaDesign d.o.o.",
                  number: "#2024-0043",
                  amount: "85,000 RSD",
                  status: "overdue",
                  statusLabel: "Kasni",
                },
              ].map((inv) => (
                <div
                  key={inv.number}
                  className="flex items-center justify-between rounded-lg border border-border/60 bg-background p-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`flex size-7 items-center justify-center rounded-lg ${
                        inv.status === "paid"
                          ? "bg-primary/10"
                          : inv.status === "sent"
                          ? "bg-blue-50"
                          : "bg-destructive/10"
                      }`}
                    >
                      {inv.status === "paid" ? (
                        <CheckCircle2 className="size-3.5 text-primary" />
                      ) : inv.status === "sent" ? (
                        <Send className="size-3.5 text-blue-500" />
                      ) : (
                        <Clock className="size-3.5 text-destructive" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        {inv.client}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {inv.number}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <p className="font-mono text-xs font-semibold text-foreground">
                        {inv.amount}
                      </p>
                      <Badge
                        variant="outline"
                        className={`h-4 px-1.5 text-[9px] ${
                          inv.status === "paid"
                            ? "border-primary/30 text-primary"
                            : inv.status === "sent"
                            ? "border-blue-200 text-blue-500"
                            : "border-destructive/30 text-destructive"
                        }`}
                      >
                        {inv.statusLabel}
                      </Badge>
                    </div>
                    <MoreHorizontal className="size-3.5 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function InvoicePreview() {
  return (
    <div className="flex h-full flex-col bg-background p-6 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary" />
            <span className="font-mono text-sm font-bold text-foreground">
              {"Paušalni Prihodi"}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-xs text-muted-foreground">{"Od:"}</p>
            <p className="text-sm font-semibold text-foreground">
              {"Marko Jovanovic PR"}
            </p>
            <p className="text-xs text-muted-foreground">
              {"PIB: 112345678"}
            </p>
            <p className="text-xs text-muted-foreground">
              {"Bulevar Kralja Aleksandra 73, Beograd"}
            </p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="font-mono text-xl font-bold text-foreground">
            {"FAKTURA"}
          </h2>
          <p className="mt-1 font-mono text-sm text-primary">
            {"#2024-0042"}
          </p>
          <div className="mt-3">
            <p className="text-xs text-muted-foreground">
              {"Datum: 15.01.2024"}
            </p>
            <p className="text-xs text-muted-foreground">
              {"Rok: 30.01.2024"}
            </p>
          </div>
        </div>
      </div>

      {/* Bill to */}
      <div className="mt-6 rounded-lg bg-muted/50 p-4">
        <p className="text-xs font-medium text-muted-foreground">{"Za:"}</p>
        <p className="mt-1 text-sm font-semibold text-foreground">
          {"TechSerbia d.o.o."}
        </p>
        <p className="text-xs text-muted-foreground">
          {"PIB: 108234567"}
        </p>
        <p className="text-xs text-muted-foreground">
          {"Knez Mihailova 22, Beograd"}
        </p>
      </div>

      {/* Line items */}
      <div className="mt-6 flex-1">
        <div className="grid grid-cols-12 gap-2 border-b border-border pb-2">
          <p className="col-span-6 text-xs font-semibold text-muted-foreground">
            {"Opis"}
          </p>
          <p className="col-span-2 text-right text-xs font-semibold text-muted-foreground">
            {"Kol."}
          </p>
          <p className="col-span-2 text-right text-xs font-semibold text-muted-foreground">
            {"Cena"}
          </p>
          <p className="col-span-2 text-right text-xs font-semibold text-muted-foreground">
            {"Ukupno"}
          </p>
        </div>
        {[
          {
            desc: "Web development",
            qty: "1",
            price: "120,000",
            total: "120,000",
          },
          {
            desc: "UI/UX konsultacije",
            qty: "3h",
            price: "10,000",
            total: "30,000",
          },
        ].map((item) => (
          <div
            key={item.desc}
            className="grid grid-cols-12 gap-2 border-b border-dashed border-border/60 py-3"
          >
            <p className="col-span-6 text-xs text-foreground">{item.desc}</p>
            <p className="col-span-2 text-right font-mono text-xs text-muted-foreground">
              {item.qty}
            </p>
            <p className="col-span-2 text-right font-mono text-xs text-muted-foreground">
              {item.price}
            </p>
            <p className="col-span-2 text-right font-mono text-xs font-medium text-foreground">
              {item.total}
            </p>
          </div>
        ))}

        {/* Total */}
        <div className="mt-4 flex justify-end">
          <div className="w-48">
            <div className="flex justify-between border-t-2 border-foreground pt-3">
              <span className="text-sm font-bold text-foreground">
                {"Ukupno:"}
              </span>
              <span className="font-mono text-lg font-bold text-foreground">
                {"150,000 RSD"}
              </span>
            </div>
            <p className="mt-1 text-right text-[10px] text-muted-foreground">
              {"Paušalac nije u sistemu PDV-a"}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 rounded-lg border border-dashed border-border p-3 text-center">
        <p className="text-[10px] text-muted-foreground">
          {"Uplata na: 265-1234567890123-45 | Svrha: Faktura #2024-0042"}
        </p>
      </div>
    </div>
  )
}

export function AppPreview({
  eyebrow,
  heading,
  description,
  appUrl,
  ctaText,
  ctaUrl,
}: AppPreviewData) {
  const [activeView, setActiveView] = useState<"dashboard" | "invoice">(
    "dashboard"
  )

  return (
    <section id="app-preview" className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-pretty font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        {/* View toggle */}
        <div className="mt-10 flex justify-center gap-2">
          <button
            onClick={() => setActiveView("dashboard")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeView === "dashboard"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <Gauge className="size-4" />
            {"Dashboard"}
          </button>
          <button
            onClick={() => setActiveView("invoice")}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeView === "invoice"
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="size-4" />
            {"Faktura"}
          </button>
        </div>

        {/* App frame */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-foreground/5">
            {/* Browser bar */}
            <div className="flex items-center gap-2 border-b border-border/60 bg-muted/50 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-border" />
                <div className="size-2.5 rounded-full bg-border" />
                <div className="size-2.5 rounded-full bg-border" />
              </div>
              <div className="mx-auto flex h-6 w-64 items-center justify-center rounded-md bg-background px-3">
                <span className="text-[10px] text-muted-foreground">
                  {appUrl}
                </span>
              </div>
              <div className="w-14" />
            </div>

            {/* Content area */}
            <div className="min-h-[440px] md:min-h-[480px]">
              {activeView === "dashboard" ? (
                <DashboardPreview />
              ) : (
                <InvoicePreview />
              )}
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-3 rounded-full border border-border bg-background px-6 py-3">
          <ChevronRight className="size-4 text-primary" />
          <p className="text-sm text-muted-foreground">
            {"Registrujte se besplatno i istražite sve funkcije sami — "}
            <a
              href={ctaUrl}
              className="font-semibold text-primary underline-offset-2 hover:underline"
            >
              {ctaText}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
