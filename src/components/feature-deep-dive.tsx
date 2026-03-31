"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  FileText,
  Pencil,
  Globe,
  Building2,
  DollarSign,
  CalendarDays,
} from "lucide-react"

function ManualEntryCard() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Pencil className="size-4" />
        <span className="text-sm font-medium">{"Ručni unos"}</span>
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="text-sm text-muted-foreground">{"Klijent"}</span>
          <span className="font-mono text-sm text-foreground">
            {"Marko Petrović"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="text-sm text-muted-foreground">{"Iznos"}</span>
          <span className="font-mono text-sm text-foreground">
            {"150,000 RSD"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="text-sm text-muted-foreground">{"Datum"}</span>
          <span className="font-mono text-sm text-foreground">
            {"15.01.2024"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{"Status"}</span>
          <Badge variant="outline" className="text-xs">
            {"Nema fakture"}
          </Badge>
        </div>
      </div>
      <div className="mt-5 rounded-lg bg-destructive/5 border border-destructive/10 p-3">
        <p className="text-xs text-destructive">
          {"Ručno uneti podaci nisu povezani sa fakturama. Nema automatskog praćenja plaćanja."}
        </p>
      </div>
    </div>
  )
}

function InvoiceLinkedCard() {
  return (
    <div className="rounded-xl border-2 border-primary/20 bg-primary/[0.02] p-6">
      <div className="flex items-center gap-2 text-primary">
        <FileText className="size-4" />
        <span className="text-sm font-medium">
          {"Povezano sa fakturom"}
        </span>
      </div>
      <div className="mt-5 space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="text-sm text-muted-foreground">{"Klijent"}</span>
          <span className="font-mono text-sm text-foreground">
            {"Marko Petrović"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="text-sm text-muted-foreground">{"Faktura"}</span>
          <span className="font-mono text-sm text-primary">
            {"#2024-0042"}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="text-sm text-muted-foreground">{"Iznos"}</span>
          <span className="font-mono text-sm text-foreground">
            {"150,000 RSD"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{"Status"}</span>
          <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
            {"Plaćeno"}
          </Badge>
        </div>
      </div>
      <div className="mt-5 rounded-lg bg-primary/5 border border-primary/10 p-3">
        <p className="text-xs text-primary">
          {"Automatski ažuriran limit. Podsetnici poslati. Plaćanje zabeleženo."}
        </p>
      </div>
    </div>
  )
}

function DomesticInvoice() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="size-5 text-muted-foreground" />
          <div>
            <p className="font-mono text-sm font-semibold text-foreground">
              {"Faktura #2024-0042"}
            </p>
            <p className="text-xs text-muted-foreground">
              {"Domaća faktura"}
            </p>
          </div>
        </div>
        <Badge variant="secondary" className="text-xs">
          {"RSD"}
        </Badge>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{"Klijent:"}</span>
          <span className="font-medium text-foreground">
            {"TechSerbia d.o.o."}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{"PIB:"}</span>
          <span className="font-mono text-foreground">{"108234567"}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{"Usluga:"}</span>
          <span className="text-foreground">{"Razvoj web aplikacije"}</span>
        </div>
        <div className="my-3 border-t border-dashed border-border" />
        <div className="flex justify-between">
          <span className="font-medium text-foreground">{"Ukupno:"}</span>
          <span className="font-mono text-lg font-bold text-foreground">
            {"150,000 RSD"}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <CalendarDays className="size-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">
          {"Rok plaćanja: 30.01.2024"}
        </span>
      </div>
    </div>
  )
}

function ForeignInvoice() {
  return (
    <div className="rounded-xl border-2 border-primary/20 bg-primary/[0.02] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="size-5 text-primary" />
          <div>
            <p className="font-mono text-sm font-semibold text-foreground">
              {"Invoice #2024-INT-018"}
            </p>
            <p className="text-xs text-muted-foreground">
              {"Inostrana faktura"}
            </p>
          </div>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
          {"EUR"}
        </Badge>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{"Klijent:"}</span>
          <span className="font-medium text-foreground">
            {"Acme GmbH, Berlin"}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{"PDV ID:"}</span>
          <span className="font-mono text-foreground">{"DE298456712"}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{"Usluga:"}</span>
          <span className="text-foreground">{"UI/UX dizajn"}</span>
        </div>
        <div className="my-3 border-t border-dashed border-border" />
        <div className="flex justify-between">
          <span className="font-medium text-foreground">{"Ukupno:"}</span>
          <div className="text-right">
            <p className="font-mono text-lg font-bold text-foreground">
              {"€1,250.00"}
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <DollarSign className="size-3" />
              <span className="font-mono">{"~146,875 RSD"}</span>
              <span>{"(NBS kurs)"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <CalendarDays className="size-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">
          {"Rok plaćanja: 30.01.2024"}
        </span>
      </div>
    </div>
  )
}

export function FeatureDeepDive() {
  return (
    <section id="deep-dive" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1.5"
          >
            {"Pre vs. Posle"}
          </Badge>
          <h2 className="text-pretty font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Vidite koliko vremena gubite ručnim radom"}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Prestanite da unosite podatke dva puta. Jedna faktura = automatski ažuriran limit, podsetnik i izveštaj."}
          </p>
        </div>

        {/* Manual vs Invoice-linked comparison */}
        <div className="mt-14">
          <h3 className="mb-6 text-center font-mono text-xl font-semibold text-foreground">
            {"Ručni unos vs. Povezano sa fakturom"}
          </h3>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <ManualEntryCard />
            <div className="relative">
              <div className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
                <div className="flex size-8 items-center justify-center rounded-full bg-primary shadow-md">
                  <ArrowRight className="size-4 text-primary-foreground" />
                </div>
              </div>
              <InvoiceLinkedCard />
            </div>
          </div>
        </div>

        {/* Domestic vs Foreign Invoice Tabs */}
        <div className="mt-20">
          <h3 className="mb-6 text-center font-mono text-xl font-semibold text-foreground">
            {"Domaće i inostrane fakture"}
          </h3>
          <div className="mx-auto max-w-lg">
            <Tabs defaultValue="domestic" className="w-full">
              <TabsList className="mx-auto mb-6 grid w-full grid-cols-2">
                <TabsTrigger value="domestic" className="gap-2">
                  <Building2 className="size-4" />
                  {"Domaća"}
                </TabsTrigger>
                <TabsTrigger value="foreign" className="gap-2">
                  <Globe className="size-4" />
                  {"Inostranstvo"}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="domestic">
                <DomesticInvoice />
              </TabsContent>
              <TabsContent value="foreign">
                <ForeignInvoice />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
