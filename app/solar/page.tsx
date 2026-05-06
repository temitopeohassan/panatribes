import React from "react";
import Link from "next/link";

export default function Solar() {
  return (
    <main className="flex-1">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-accent/30 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* TEXT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-xs font-medium text-accent">
                {/* sun icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                Solar & Backup Power
              </div>

              <h1 className="mt-5 font-display text-5xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
                Power that <span className="text-gradient-gold">just works</span>.
              </h1>

              <p className="mt-5 text-lg text-white/70 max-w-lg">
                NEPA off? No problem. Engineered for Nigeria — silent, clean,
                instant backup from portable units to whole-home solar.
              </p>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold text-gold-foreground shadow-gold px-7 h-12 font-semibold hover:opacity-90"
                >
                  Shop power kits
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-7 h-12 text-sm font-medium hover:bg-white/10"
                >
                  Free consultation
                </Link>
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-glow">
              <img
                src="/assets/cat-solar-CVov2Vx8.jpg"
                alt="Solar panel"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SCALE SECTION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">
              Choose your scale
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              From a single device to your whole home.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            
            {/* Portable */}
            <div className="rounded-2xl bg-card border border-border/50 p-7 hover:border-accent/50 hover:shadow-elegant transition-smooth">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="6" width="16" height="12" rx="2" />
                  <path d="M22 10v4" />
                </svg>
              </div>

              <p className="mt-5 text-xs font-mono text-accent uppercase tracking-wider">
                300W – 1000W
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold">Portable</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Power your essentials anywhere. Phones, routers, fans, lights.
              </p>
              <p className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Best for:</span>{" "}
                Daily backup, travel, freelancers
              </p>
            </div>

            {/* Home */}
            <div className="rounded-2xl bg-card border border-border/50 p-7 hover:border-accent/50 hover:shadow-elegant transition-smooth">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </div>

              <p className="mt-5 text-xs font-mono text-accent uppercase tracking-wider">
                1000W – 3000W
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold">Home backup</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Run fridge, TV, fans and lights through any outage.
              </p>
              <p className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Best for:</span>{" "}
                Apartments, family homes
              </p>
            </div>

            {/* Solar */}
            <div className="rounded-2xl bg-card border border-border/50 p-7 hover:border-accent/50 hover:shadow-elegant transition-smooth">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 14l9-10 7 7-9 10z" />
                </svg>
              </div>

              <p className="mt-5 text-xs font-mono text-accent uppercase tracking-wider">
                Custom
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold">
                Whole-home solar
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Solar panels + battery storage + inverter, professionally installed.
              </p>
              <p className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Best for:</span>{" "}
                Houses, SMEs, farms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <img
            src="/assets/cat-power-4B3vV899.jpg"
            alt=""
            className="mx-auto rounded-2xl shadow-elegant"
            width={120}
            height={120}
          />

          <h2 className="mt-8 font-display text-3xl sm:text-4xl font-bold">
            Not sure what you need?
          </h2>

          <p className="mt-3 text-muted-foreground">
            Tell us your appliances. We'll size the perfect kit and quote it free.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-6 rounded-full bg-gradient-gold text-gold-foreground shadow-gold px-8 h-12 font-medium"
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </main>
  );
}