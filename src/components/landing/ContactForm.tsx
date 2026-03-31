"use client";

import { useState } from "react";

type Status = { type: "idle" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    };

    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "Došlo je do greške.");
      }

      event.currentTarget.reset();
      setStatus({
        type: "success",
        message: data.message || "Poruka je uspešno poslata.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Došlo je do neočekivane greške.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <input
        name="name"
        required
        placeholder="Ime i prezime"
        className="rounded-md border bg-white px-3 py-2"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email adresa"
        className="rounded-md border bg-white px-3 py-2"
      />
      <input
        name="subject"
        required
        placeholder="Predmet"
        className="rounded-md border bg-white px-3 py-2"
      />
      <textarea
        name="message"
        required
        placeholder="Kako možemo da pomognemo?"
        rows={5}
        className="rounded-md border bg-white px-3 py-2"
      />
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
      >
        {loading ? "Slanje..." : "Pošalji poruku"}
      </button>
      {status.message ? (
        <p
          className={
            status.type === "success" ? "text-sm text-primary" : "text-sm text-red-700"
          }
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
