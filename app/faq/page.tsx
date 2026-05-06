import React from "react";
import Link from "next/link";

export default function Faq() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <p className="text-sm text-accent uppercase tracking-widest font-medium">
            Help center
          </p>

          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Frequently asked questions
          </h1>

          <p className="mt-4 text-muted-foreground">
            Can't find what you're looking for?{" "}
            <Link href="/contact" className="text-accent underline-offset-4 hover:underline">
              Contact our team
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-3">

          {/* Item */}
          <details className="group rounded-2xl border border-border/60 bg-card/40 p-5 open:bg-card/70 transition-smooth">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-display text-base sm:text-lg font-semibold">
                How fast is delivery?
              </span>
              <span className="h-7 w-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              Lagos orders placed before 1pm are delivered same-day. Nationwide
              deliveries via courier take 2–5 working days depending on location.
            </p>
          </details>

          <details className="group rounded-2xl border border-border/60 bg-card/40 p-5 open:bg-card/70 transition-smooth">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-display text-base sm:text-lg font-semibold">
                Are your products genuine?
              </span>
              <span className="h-7 w-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              Every product is sourced from authorised distributors, sealed in
              original packaging and backed by a Panatribes warranty.
            </p>
          </details>

          <details className="group rounded-2xl border border-border/60 bg-card/40 p-5 open:bg-card/70 transition-smooth">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-display text-base sm:text-lg font-semibold">
                What payment options do you accept?
              </span>
              <span className="h-7 w-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              We accept secure card payments via Paystack, bank transfer, USSD,
              and cash on delivery (for select Lagos addresses).
            </p>
          </details>

          <details className="group rounded-2xl border border-border/60 bg-card/40 p-5 open:bg-card/70 transition-smooth">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-display text-base sm:text-lg font-semibold">
                Do you offer warranty?
              </span>
              <span className="h-7 w-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              Yes — most devices carry a 12-month warranty. Power stations and
              solar products carry up to 24 months. Details are listed on each
              product page.
            </p>
          </details>

          <details className="group rounded-2xl border border-border/60 bg-card/40 p-5 open:bg-card/70 transition-smooth">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-display text-base sm:text-lg font-semibold">
                Can I return a product?
              </span>
              <span className="h-7 w-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              Sealed, unused products can be returned within 7 days of delivery.
              Defective items are replaced or refunded under warranty terms.
            </p>
          </details>

          <details className="group rounded-2xl border border-border/60 bg-card/40 p-5 open:bg-card/70 transition-smooth">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-display text-base sm:text-lg font-semibold">
                Do you ship outside Nigeria?
              </span>
              <span className="h-7 w-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              Currently we deliver nationwide within Nigeria. International
              shipping for diaspora orders is available on request via our
              concierge team.
            </p>
          </details>

          <details className="group rounded-2xl border border-border/60 bg-card/40 p-5 open:bg-card/70 transition-smooth">
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="font-display text-base sm:text-lg font-semibold">
                How do solar kits and power stations work together?
              </span>
              <span className="h-7 w-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-lg group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">
              Our power stations accept solar input via MC4 connectors. Pair a
              200W foldable panel with a 600W station for a fully off-grid setup.
            </p>
          </details>

        </div>
      </section>
    </main>
  );
}