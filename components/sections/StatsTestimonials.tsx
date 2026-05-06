// components/sections/StatsTestimonials.tsx
import React from "react";

type Stat = {
  value: string;
  label: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const stats: Stat[] = [
  { value: "10K+", label: "Customers nationwide" },
  { value: "98%", label: "Satisfaction rating" },
  { value: "24h", label: "Avg. Lagos delivery" },
  { value: "1yr+", label: "Standard warranty" },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Got my MacBook delivered same-day in Lekki. Sealed, original, and ₦40k cheaper than the mall.",
    name: "Tolu A.",
    role: "Product Designer, Lagos",
  },
  {
    quote:
      "We power our entire small office on a Panatribes solar kit. Hasn't failed us in 8 months.",
    name: "Chuka E.",
    role: "Founder, BrightOps",
  },
  {
    quote:
      "Their WhatsApp support is the best thing about online shopping in Nigeria. Real humans, fast replies.",
    name: "Aisha M.",
    role: "Student, UNILAG",
  },
];

export default function StatsTestimonials() {
  return (
    <section className="py-20 sm:py-28 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl bg-background border border-border/50 p-7 hover:border-accent/40 transition"
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-accent mb-4">
                {"★★★★★".split("").map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <figcaption className="mt-5 pt-5 border-t border-border/50">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}