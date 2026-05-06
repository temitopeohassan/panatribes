// components/layout/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
            🔍
          </button>

          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            className="h-9 w-9 rounded-full hover:bg-accent/20 hover:text-accent transition-all"
          >
            ☀️
          </button>

          {/* Account */}
          <Link
            href="/account"
            aria-label="Account"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground"
          >
            👤
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative h-9 w-9 flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground"
          >
            🛒
          </Link>

          {/* Mobile menu */}
          <button
            aria-label="Menu"
            className="lg:hidden h-9 w-9 rounded-full hover:bg-accent hover:text-accent-foreground"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}