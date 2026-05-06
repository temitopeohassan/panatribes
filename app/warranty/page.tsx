import React from "react";

export default function Warranty() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm text-accent uppercase tracking-widest font-medium">
            Warranty
          </p>

          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Buy with confidence.
          </h1>

          <p className="mt-4 text-muted-foreground max-w-2xl">
            Every product sold by Panatribes is genuine, sealed and
            warranty-backed. We stand behind what we sell.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-5">

          {/* 12 months */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              12 months on devices
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Smartphones, laptops, tablets and audio gear.
            </p>
          </div>

          {/* 24 months */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              24 months on power
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Power stations, inverters and solar panels.
            </p>
          </div>

          {/* Returns */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              7-day return window
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Sealed unused items can be returned within 7 days.
            </p>
          </div>

          {/* Service */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a6 6 0 0 1-8.2 7l-7.9 7.9a1 1 0 1 1-3-3l7.9-7.9a6 6 0 0 1 7.1-8.2c.4.1.5.7.2 1z" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              In-house service
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Lagos-based service team for fast turnarounds.
            </p>
          </div>

          {/* Warranty card */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8l4 4v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" />
              <path d="m9 15 2 2 4-4" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              Written warranty card
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Every order ships with a stamped warranty card.
            </p>
          </div>

          {/* Authentic guarantee */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              Authentic-only guarantee
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              If we ever ship a counterfeit, full refund + ₦25,000 credit.
            </p>
          </div>
        </div>

        {/* HOW TO CLAIM */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-10 text-muted-foreground text-sm">
          <h2 className="font-display text-xl font-bold text-foreground">
            How to claim warranty
          </h2>

          <ol className="mt-3 space-y-2 list-decimal list-inside">
            <li>
              Email{" "}
              <a
                className="text-accent"
                href="mailto:support@panatribes.com"
              >
                support@panatribes.com
              </a>{" "}
              with your order number and issue description.
            </li>
            <li>We respond within 24 working hours.</li>
            <li>
              Pickup or courier arranged in Lagos or nationwide where needed.
            </li>
            <li>
              Resolution: 48 hours (accessories), 5 days (devices), 7 days
              (power systems).
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}