"use client";

import { useCart } from "@/components/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { initializeTransaction } from "@/app/actions/paystack";

export default function Cart() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    if (!email) {
      alert("Please enter your email to proceed.");
      return;
    }

    setIsLoading(true);
    try {
      const result = await initializeTransaction({
        email,
        amount: cartTotal,
        metadata: {
          cartItems: items.map(item => ({ id: item.id, name: item.name, quantity: item.quantity })),
        },
        callback_url: `${window.location.origin}/shop?payment=success`,
      });

      // Redirect to Paystack
      window.location.href = result.authorization_url;
    } catch (error: any) {
      console.error("Checkout error:", error);
      alert(error.message || "Failed to initialize checkout. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-display font-bold">Your Cart</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 hover:bg-card transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-card flex items-center justify-center text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.1-5.38a1 1 0 0 0-.1-1.11 1 1 0 0 0-.91-.39H5.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Your cart is empty</p>
                    <p className="text-sm text-muted-foreground">Looks like you haven't added anything yet.</p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-accent text-sm font-bold hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-border">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-semibold line-clamp-1">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M3 6h18" />
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">₦{item.price.toLocaleString()}</span>
                        <div className="flex items-center gap-2 border border-border rounded-md px-2 py-1 scale-90 origin-right">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-muted-foreground hover:text-foreground font-bold px-1"
                          >
                            -
                          </button>
                          <span className="text-xs min-w-[1rem] text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-muted-foreground hover:text-foreground font-bold px-1"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 px-4 text-sm rounded-xl border border-border bg-card/50 focus:border-accent outline-none transition"
                    required
                  />
                </div>
                <div className="flex items-center justify-between font-bold">
                  <span>Total</span>
                  <span>₦{cartTotal.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout.</p>
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl bg-accent text-accent-foreground font-bold hover:bg-accent/90 transition shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    "Checkout"
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
