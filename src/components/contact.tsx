"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send } from "lucide-react"
import type { ContactInfoData } from "@/lib/landing-data"

type ContactStatus = {
  type: "idle" | "success" | "error"
  message?: string
}

export function Contact({ heading, subheading, email, liveChatHours }: ContactInfoData) {
  const [status, setStatus] = useState<ContactStatus>({ type: "idle" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formElement = event.currentTarget

    const form = new FormData(formElement)
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    }

    setIsSubmitting(true)
    setStatus({ type: "idle" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = (await response.json()) as { message?: string; error?: string }

      if (!response.ok) {
        throw new Error(data.error || "Došlo je do greške. Molimo pokušajte ponovo.")
      }

      formElement.reset()
      setStatus({
        type: "success",
        message: data.message || "Poruka je uspešno poslata.",
      })
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Došlo je do neočekivane greške. Molimo pokušajte ponovo.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div>
            <Badge
              variant="secondary"
              className="mb-4 rounded-full px-4 py-1.5"
            >
              {"Kontakt"}
            </Badge>
            <h2 className="text-pretty font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {subheading}
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <div className="flex items-center gap-4 rounded-xl border border-border bg-background p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{"Email"}</p>
                  <p className="text-sm text-muted-foreground">{email}</p>
                </div>
              </div>
              {liveChatHours ? (
                <div className="rounded-xl border border-border bg-background p-5">
                  <p className="font-semibold text-foreground">{"Live chat"}</p>
                  <p className="text-sm text-muted-foreground">{liveChatHours}</p>
                </div>
              ) : null}
            </div>
          </div>

          {/* Right column — form */}
          <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
            <h3 className="font-mono text-xl font-bold text-foreground">
              {"Pošaljite nam poruku"}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {"Popunite formu i javićemo vam se u najkraćem roku."}
            </p>
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={onSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {"Ime i prezime"}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    placeholder="Marko Petrovic"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {"Email"}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="marko@primer.rs"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {"Tema"}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
                  placeholder="Npr. Pitanje o Pro planu"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {"Poruka"}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows={4}
                  placeholder="Opišite vaše pitanje ili predlog..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-2 w-full gap-2"
                disabled={isSubmitting}
              >
                <Send className="size-4" />
                {isSubmitting ? "Slanje..." : "Pošalji poruku"}
              </Button>
              {status.message ? (
                <p
                  className={`text-center text-sm ${
                    status.type === "success" ? "text-primary" : "text-destructive"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
              <p className="text-center text-xs text-muted-foreground">
                {"Vaši podaci su bezbedni i nikada ih ne delimo sa trećim stranama."}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
