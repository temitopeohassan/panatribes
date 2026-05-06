// components/sections/Newsletter.tsx
"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // 🔌 Replace with your API / backend
    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);
    setSuccess(true);
    setEmail("");
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
          Be first to know about{" "}
          <span className="text-gradient-gold">flash deals</span>.
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          Drops, restocks, and Lagos-only deals delivered to your inbox. Zero spam.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 rounded-full border border-border bg-background px-5 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center h-12 px-7 rounded-full text-sm font-semibold bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        {/* Success message */}
        {success && (
          <p className="mt-4 text-sm text-accent">
            🎉 You’re subscribed!
          </p>
        )}

      </div>
    </section>
  );
}