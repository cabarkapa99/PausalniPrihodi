import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import type { FAQData } from "@/lib/landing-data"

export function FAQ({ heading, items }: FAQData) {
  const faqItems = items ?? []

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1.5"
          >
            {"FAQ"}
          </Badge>
          <h2 className="text-pretty font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={`${item.question}-${i}`}
                value={`${item.question}-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
