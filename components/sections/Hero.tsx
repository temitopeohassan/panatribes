// components/sections/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-primary-glow/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 sm:pt-20 sm:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Same-day delivery in Lagos
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              The devices you trust.
              <br />
              The <span className="text-gradient-gold">power</span> that keeps them running.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
              Smartphones, laptops, audio, and accessories — paired with portable power stations, solar kits, and backup systems built for Nigerian homes and businesses.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full h-12 px-7 text-sm font-semibold bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90 transition"
              >
                Shop devices
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
                href="/solar"
                className="inline-flex items-center rounded-full h-12 px-7 text-sm font-medium border border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 transition"
              >
                Explore power solutions
              </Link>
            </div>

            {/* Features */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">

              {/* Item */}
              <div className="flex flex-col items-start gap-2">
                <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
                  🚚
                </div>
                <span className="text-xs text-white/70 font-medium">
                  Lagos same-day
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
                  🛡️
                </div>
                <span className="text-xs text-white/70 font-medium">
                  1-yr warranty
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
                  ⚡
                </div>
                <span className="text-xs text-white/70 font-medium">
                  Secure pay
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-glow">
              <Image
                src="/assets/hero-power-BOlF7ZUY.jpg"
                alt="Portable power station"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 rounded-2xl bg-card/90 backdrop-blur-md border border-border/50 px-5 py-4 shadow-elegant">
              <p className="text-xs text-muted-foreground">Trusted by</p>
              <p className="font-display font-bold text-2xl">10,000+</p>
              <p className="text-xs text-accent">Nigerian customers</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}