// components/sections/Why.tsx
import React from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Same-day Lagos delivery",
    description:
      "Order before 2pm and we deliver across Lagos the same day.",
    icon: "🚚",
  },
  {
    title: "Genuine, warranty-backed",
    description:
      "Every device sealed, sourced direct, and covered by warranty.",
    icon: "🛡️",
  },
  {
    title: "Power that lasts",
    description:
      "Portable stations, solar kits, and backup systems for every home.",
    icon: "🔋",
  },
  {
    title: "WhatsApp ordering",
    description:
      "Order, ask, and track via WhatsApp — fast, human, helpful.",
    icon: "💬",
  },
  {
    title: "Nationwide in 24-72hrs",
    description:
      "Reliable shipping to every state in Nigeria, fully tracked.",
    icon: "⏱️",
  },
  {
    title: "Premium experience",
    description:
      "Curated catalog, expert advice, and after-sales you can count on.",
    icon: "✨",
  },
];

export default function Why() {
  return (
    <section className="py-20 sm:py-28 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">
            Why Panatribes
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Built for how Nigeria actually lives.
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            Unreliable power. Long delivery times. Counterfeit gadgets. We solve every one of those.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-background border border-border/50 p-7 hover:border-accent/50 hover:shadow-elegant transition"
            >
              {/* Icon */}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                <span className="text-lg">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 className="mt-5 font-display text-lg font-semibold">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}