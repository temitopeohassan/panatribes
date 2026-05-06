import React from "react";
import Link from "next/link";

export default function Business() {
  return (
    <main className="flex-1">
      {/* HERO SECTION */}
      <section className="bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-accent uppercase tracking-widest">
              For Business
            </p>

            <h1 className="mt-2 font-display text-5xl sm:text-6xl font-bold tracking-tight text-white">
              Equip your team.{" "}
              <span className="text-gradient-gold">Power your office.</span>
            </h1>

            <p className="mt-5 text-lg text-white/70 max-w-xl">
              From 5-person startups to 500-person enterprises — devices,
              accessories, and reliable backup power, procured and supported as
              one partnership.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors shadow hover:bg-primary/90 mt-8 rounded-full bg-gradient-gold text-gold-foreground shadow-gold px-8 h-12 font-semibold"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            
            {/* Card 1 */}
            <div className="rounded-2xl bg-card border border-border/50 p-7 hover:border-accent/50 transition-smooth">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {/* package icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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

              <h3 className="mt-5 font-display text-xl font-semibold">
                Bulk procurement
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Volume pricing on devices, accessories, and power equipment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-card border border-border/50 p-7 hover:border-accent/50 transition-smooth">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {/* building icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M10 12h4" />
                  <path d="M10 8h4" />
                  <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                </svg>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold">
                Office power infra
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                End-to-end design, supply, and install for office backup power.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-card border border-border/50 p-7 hover:border-accent/50 transition-smooth">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {/* users icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold">
                Reseller program
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Become an authorised Panatribes reseller in your city or sector.
              </p>
            </div>
          </div>

          {/* BENEFITS */}
          <div className="mt-16 rounded-3xl bg-card border border-border/50 p-8 sm:p-12">
            <h2 className="font-display text-3xl font-bold">What you get</h2>

            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Dedicated account manager",
                "Net-30 payment terms (qualified buyers)",
                "Volume discounts from 10 units",
                "On-site delivery & installation",
                "Extended warranty options",
                "Quarterly business reviews",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-accent mt-0.5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}