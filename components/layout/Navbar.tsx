"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function Navbar() {
  const { setIsCartOpen, cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-9 w-9 overflow-hidden rounded-lg ring-1 ring-border/50 group-hover:ring-accent transition-all">
              <Image
                src="/assets/panatribes-logo-CfIy_ZcY.jpeg"
                alt="Panatribes"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              Panatribes
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all">
            Shop
          </Link>
          <Link href="/solar" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all">
            Solar & Power
          </Link>
          <Link href="/business" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all">
            Business
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all">
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">

          {/* Search */}
          <button
            aria-label="Search"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </button>

          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-accent/20 hover:text-accent transition-all"
          >
            ☀️
          </button>

          {/* Account */}
          <Link
            href="/account"
            aria-label="Account"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </Link>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.1-5.38a1 1 0 0 0-.1-1.11 1 1 0 0 0-.91-.39H5.5"/></svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground ring-2 ring-background">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu */}
          <button
            aria-label="Menu"
            className="lg:hidden h-9 w-9 flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}