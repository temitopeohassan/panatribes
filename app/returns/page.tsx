import React from "react";

export default function Returns() {
  return (
    <main className="flex-1">
      {/* HERO */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm text-accent uppercase tracking-widest font-medium">
            Returns
          </p>

          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Returns & Refunds
          </h1>

          <p className="mt-4 text-muted-foreground">
            Honest policies. No fine-print games.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-muted-foreground text-sm leading-relaxed">

          <h2 className="font-display text-xl font-bold text-foreground">
            7-day return window
          </h2>
          <p className="mt-2">
            If a product is unopened, in its original sealed packaging, and
            unused — you may return it within 7 days of delivery for a full
            refund (less return shipping where applicable).
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-foreground">
            Defective on arrival
          </h2>
          <p className="mt-2">
            If a product arrives damaged or stops working within the warranty
            period, contact{" "}
            <a
              className="text-accent"
              href="mailto:support@panatribes.com"
            >
              support@panatribes.com
            </a>{" "}
            within 48 hours of delivery and we will arrange a free swap.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-foreground">
            Refund timeline
          </h2>
          <p className="mt-2">
            Approved refunds are processed within 5 working days back to your
            original payment method. Bank transfers may take an extra 1–2
            business days to reflect.
          </p>

          <h2 className="mt-6 font-display text-xl font-bold text-foreground">
            Non-returnable items
          </h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Used or activated devices outside warranty claims</li>
            <li>Items missing original packaging or accessories</li>
            <li>Custom-configured solar systems after installation</li>
          </ul>

        </div>
      </section>
    </main>
  );
}