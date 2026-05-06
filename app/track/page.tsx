import React from "react";

export default function Track() {
  return (
    <main className="flex-1">
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center">
            <div className="mx-auto h-14 w-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
              <svg
                className="h-6 w-6"
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
            </div>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl font-bold">
              Track your order
            </h1>

            <p className="mt-3 text-muted-foreground">
              Enter the reference from your confirmation email.
            </p>
          </div>

          {/* FORM */}
          <form className="mt-8 max-w-xl mx-auto space-y-3">
            <input
              className="flex w-full border border-input h-12 rounded-full px-5 bg-background text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="Order reference (e.g. PT-XXXXX-XXXXX)"
              maxLength={64}
            />

            <input
              type="email"
              className="flex w-full border border-input h-12 rounded-full px-5 bg-background text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              placeholder="Email used at checkout"
              maxLength={255}
            />

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full rounded-full h-12 bg-gradient-gold text-gold-foreground shadow-gold font-semibold text-sm"
            >
              <svg
                className="h-4 w-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.34-4.34" />
              </svg>
              Track order
            </button>
          </form>

        </div>
      </section>
    </main>
  );
}