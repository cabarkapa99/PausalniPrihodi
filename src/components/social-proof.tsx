import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import type { SocialProofData } from "@/lib/landing-data"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="size-3.5 fill-primary text-primary"
        />
      ))}
    </div>
  )
}

const getInitials = (fullName: string) =>
  fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("")

export function SocialProof({ heading, testimonials }: SocialProofData) {
  const testimonialItems = testimonials ?? []

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {"Glasovi korisnika"}
          </p>
          <h2 className="mt-3 text-pretty font-mono text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonialItems.map((t, index) => (
            <div
              key={`${t.name}-${index}`}
              className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-6"
            >
              <StarRating rating={t.rating ?? 5} />
              <p className="mt-4 text-sm leading-relaxed text-foreground">
                {`"${t.text}"`}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                    {getInitials(t.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
