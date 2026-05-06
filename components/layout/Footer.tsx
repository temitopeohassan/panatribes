// components/layout/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* Top grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-10 w-10 overflow-hidden rounded-lg">
                <Image
                  src="/assets/panatribes-logo-CfIy_ZcY.jpeg"
                  alt="Panatribes"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-display text-xl font-bold">
                Panatribes
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              The devices people depend on. The power that keeps them running.
              Lagos-based, Nigeria-wide, world-class.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a href="https://instagram.com" aria-label="Instagram" className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
                📸
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
                👍
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
                🐦
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/shop" className="text-muted-foreground hover:text-accent transition">Smartphones</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-accent transition">Laptops</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-accent transition">Audio</Link></li>
              <li><Link href="/shop" className="text-muted-foreground hover:text-accent transition">Accessories</Link></li>
              <li><Link href="/solar" className="text-muted-foreground hover:text-accent transition">Solar & Power</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition">Contact</Link></li>
              <li><Link href="/warranty" className="text-muted-foreground hover:text-accent transition">Warranty</Link></li>
              <li><Link href="/returns" className="text-muted-foreground hover:text-accent transition">Returns</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-accent transition">Shipping</Link></li>
              <li><Link href="/track" className="text-muted-foreground hover:text-accent transition">Track Order</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-accent transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Reach Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">📍 Lagos, Nigeria</li>
              <li className="flex items-start gap-2">📞 +234 800 PANATRIBES</li>
              <li className="flex items-start gap-2">✉️ hello@panatribes.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Panatribes Global Company Limited. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-accent transition">Privacy</Link>
            <Link href="/terms" className="hover:text-accent transition">Terms</Link>
            <Link href="/faq" className="hover:text-accent transition">FAQ</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}