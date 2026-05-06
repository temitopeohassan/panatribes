// components/sections/Categories.tsx
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Smartphones",
    subtitle: "120+ models",
    image: "/assets/cat-phones-C0iA7PIp.jpg",
  },
  {
    title: "Laptops",
    subtitle: "60+ models",
    image: "/assets/cat-laptops-DjjMu2MX.jpg",
  },
  {
    title: "Audio",
    subtitle: "Premium sound",
    image: "/assets/cat-audio-BhfgX7iZ.jpg",
  },
  {
    title: "Power Stations",
    subtitle: "Battery backup",
    image: "/assets/cat-power-4B3vV899.jpg",
  },
  {
    title: "Solar Kits",
    subtitle: "Off-grid ready",
    image: "/assets/cat-solar-CVov2Vx8.jpg",
  },
  {
    title: "Power Banks",
    subtitle: "Stay charged",
    image: "/assets/cat-powerbank-DXDTnV_f.jpg",
  },
];

export default function Categories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">
              Shop by Category
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Devices <span className="text-gradient-gold">+</span> Power
            </h2>
          </div>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition"
          >
            Browse all categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:translate-x-1 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href="/shop"
              className="group relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-2xl bg-card ring-1 ring-border/50 hover:ring-accent transition"
            >
              
              {/* Image */}
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-xs text-accent/90 mb-1 font-medium">
                  {cat.subtitle}
                </p>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}