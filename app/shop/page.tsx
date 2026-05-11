"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import productsData from "../data/products.json";
import ProductCard from "@/components/sections/ProductCard";
import { Product } from "@/types/product";
import { useCart } from "@/components/CartContext";

const products = (productsData.products as any[]).map(p => ({
  ...p,
  id: String(p.id),
  badge: p.tag // Map tag from JSON to badge used in UI
})) as Product[];

function ShopContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const paymentStatus = searchParams.get("payment");

  useEffect(() => {
    if (paymentStatus === "success") {
      clearCart();
    }
  }, [paymentStatus, clearCart]);

  return (
    <main className="flex-1">
      {/* Success Message */}
      {paymentStatus === "success" && (
        <div className="bg-emerald-500/10 border-b border-emerald-500/20 py-4">
          <div className="mx-auto max-w-7xl px-4 flex items-center gap-3 text-emerald-600 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Payment successful! Thank you for your order.
          </div>
        </div>
      )}

      {/* Header */}
      <section className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-sm text-accent uppercase tracking-widest">
            Shop
          </p>
          <h1 className="mt-2 font-display text-5xl font-bold">
            All Products
          </h1>
          <p className="mt-3 text-muted-foreground">
            Smartphones, laptops, accessories & power solutions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[260px_1fr] gap-10">
          
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            
            {/* Category */}
            <div className="rounded-2xl border border-border/60 bg-card/30 p-4">
              <p className="font-display text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {["All", "phones", "laptops", "audio", "power", "solar"].map((cat) => (
                  <button
                    key={cat}
                    className="rounded-full px-3 py-1.5 text-xs font-medium border bg-card border-border hover:border-accent text-muted-foreground hover:text-foreground"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="rounded-2xl border border-border/60 bg-card/30 p-4">
              <p className="font-display text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">
                Price (₦)
              </p>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="h-9 px-3 text-sm border rounded-md bg-transparent"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="h-9 px-3 text-sm border rounded-md bg-transparent"
                />
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-2xl border border-border/60 bg-card/30 p-4">
              <p className="font-display text-sm font-bold mb-3 uppercase tracking-wider text-muted-foreground">
                Availability
              </p>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4" />
                In stock only
              </label>
            </div>

          </aside>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}