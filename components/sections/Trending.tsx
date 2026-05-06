// components/sections/Trending.tsx
import Image from "next/image";
import Link from "next/link";

type Product = {
  name: string;
  brand: string;
  image: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  discount?: string;
  rating: string;
  reviews: string;
  href: string;
};

const products: Product[] = [
  {
    name: "PanaPro Flagship X1 5G",
    brand: "PanaPro",
    image: "/assets/cat-phones-C0iA7PIp.jpg",
    price: "₦850,000",
    oldPrice: "₦920,000",
    badge: "New",
    discount: "-8%",
    rating: "4.8",
    reviews: "142",
    href: "/product/panapro-flagship-x1",
  },
  {
    name: 'Ultraslim Laptop 14" Pro',
    brand: "Panatribes",
    image: "/assets/cat-laptops-DjjMu2MX.jpg",
    price: "₦1,250,000",
    oldPrice: "₦1,380,000",
    badge: "Best seller",
    discount: "-9%",
    rating: "4.9",
    reviews: "64",
    href: "/product/ultraslim-laptop-14",
  },
  {
    name: "Portable Power Station 600W",
    brand: "Panatribes Power",
    image: "/assets/cat-power-4B3vV899.jpg",
    price: "₦320,000",
    oldPrice: "₦360,000",
    badge: "Lagos same-day",
    discount: "-11%",
    rating: "4.9",
    reviews: "96",
    href: "/product/portable-power-station-600",
  },
  {
    name: "Wireless Earbuds Plus ANC",
    brand: "Panatribes Audio",
    image: "/assets/cat-audio-BhfgX7iZ.jpg",
    price: "₦65,000",
    oldPrice: "₦78,000",
    discount: "-17%",
    rating: "4.7",
    reviews: "211",
    href: "/product/wireless-earbuds-plus",
  },
];

export default function Trending() {
  return (
    <section className="py-16 sm:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-medium text-accent uppercase tracking-widest mb-2">
              Best sellers
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
              Trending this week
            </h2>
          </div>

          <Link
            href="/shop"
            className="group inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition"
          >
            See all products
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <Link key={i} href={product.href} className="group">

              {/* Image card */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-card ring-1 ring-border/50 group-hover:ring-accent transition">

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}

                {/* Discount */}
                {product.discount && (
                  <span className="absolute top-3 right-3 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-1">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="mt-3 space-y-1">
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground font-medium">
                  {product.brand}
                </p>

                <h3 className="font-medium text-sm leading-tight group-hover:text-accent transition line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2">
                  <p className="font-display font-semibold text-base">
                    {product.price}
                  </p>
                  {product.oldPrice && (
                    <p className="text-xs text-muted-foreground line-through">
                      {product.oldPrice}
                    </p>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  ⭐ {product.rating}
                  <span>· {product.reviews}</span>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}