import React from "react";

export default function Shipping() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm text-accent uppercase tracking-widest font-medium">
            Shipping
          </p>

          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Fast. Tracked. Insured.
          </h1>

          <p className="mt-4 text-muted-foreground max-w-2xl">
            From our Lagos hub to your doorstep — anywhere in Nigeria.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-5">

          {/* Lagos same-day */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              Lagos same-day
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Order before 1pm Mon–Sat for same-day delivery within Lagos mainland & island.
            </p>
          </div>

          {/* Nationwide */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              Nationwide 2–5 days
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tracked courier shipping to every state in Nigeria via vetted partners.
            </p>
          </div>

          {/* Free shipping */}
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <svg
              className="h-5 w-5 text-accent"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
              <path d="M12 22V12" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <path d="m7.5 4.27 9 5.15" />
            </svg>

            <h3 className="mt-3 font-display text-lg font-semibold">
              Free over ₦250,000
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Free Lagos delivery on orders over ₦250,000. Nationwide flat-rate ₦3,500.
            </p>
          </div>

          {/* Pickup */}
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
              Pickup option
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Skip shipping — pick up at our Lagos showroom by appointment.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}