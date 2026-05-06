// components/sections/PowerPromo.tsx
import Image from "next/image";
import Link from "next/link";

export default function PowerPromo() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero border border-border/50">

          {/* Background glow */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 sm:p-14">

            {/* LEFT CONTENT */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-xs font-medium text-accent">
                ☀️ New: Solar & Backup Power
              </div>

              {/* Heading */}
              <h2 className="mt-5 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Never lose power.
                <br />
                Never lose work.
              </h2>

              {/* Description */}
              <p className="mt-5 text-white/70 text-lg max-w-lg">
                Portable power stations from 300W to 3000W. Solar charging kits.
                Solar-enabled standing fans. Whole-home backup. Built for the
                realities of Nigerian power.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3">

                <Link
                  href="/solar"
                  className="inline-flex items-center gap-2 rounded-full h-12 px-7 text-sm font-semibold bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90 transition"
                >
                  Explore power kits
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/business"
                  className="inline-flex items-center rounded-full h-12 px-7 text-sm font-medium border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 transition"
                >
                  For business
                </Link>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative aspect-[4/5] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-glow">
              <Image
                src="/assets/cat-solar-CVov2Vx8.jpg"
                alt="Solar panel"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}