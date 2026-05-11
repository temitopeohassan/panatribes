"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/components/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="group rounded-2xl border border-border/50 bg-background p-4 hover:border-accent/40 transition-smooth flex flex-col h-full">
      
      <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-semibold text-sm line-clamp-2">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.category}</p>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm">
            ₦{product.price.toLocaleString()}
          </span>
          
          <div className="flex items-center gap-2 border border-border/60 rounded-lg px-2 py-1">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-muted-foreground hover:text-foreground font-bold px-1"
            >
              -
            </button>
            <span className="text-xs min-w-[1.5rem] text-center font-medium">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="text-muted-foreground hover:text-foreground font-bold px-1"
            >
              +
            </button>
          </div>
        </div>
        
        <button 
          onClick={handleAddToCart}
          className="w-full text-xs py-2 rounded-xl bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}