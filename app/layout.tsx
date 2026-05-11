import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/CartContext";
import Cart from "@/components/sections/Cart";

export const metadata = {
  title: "Panatribes — Devices + Power for Nigeria",
  description: "Devices + Power for Nigeria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
