import React from "react";

export default function About() {
  return (
    <main className="flex-1">
      <section className="border-b border-border/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-sm font-medium text-accent uppercase tracking-widest">
            About
          </p>

          <h1 className="mt-2 font-display text-5xl sm:text-6xl font-bold tracking-tight">
            Built in Lagos.{" "}
            <span className="text-gradient-gold">For Nigeria.</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Panatribes Global Company Limited was founded by{" "}
            <strong className="text-foreground">
              Folami Elijah Fakolade
            </strong>{" "}
            with a simple conviction: Nigerians deserve world-class technology
            and power solutions — sold honestly, delivered fast, and backed by
            humans who actually answer.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="font-display text-2xl font-bold">Our mission</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To put dependable devices and reliable power in the hands of
              every Nigerian — from students in UNILAG to SMEs in Aba to
              families in Abuja.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">Our vision</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To become Africa's most trusted name in technology retail and
              energy solutions — combining global standards with local
              understanding.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">What we sell</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Smartphones, laptops, tablets, audio, chargers, power banks and
              accessories — alongside portable power stations, solar kits,
              solar-enabled fans, and whole-home backup systems.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold">What we promise</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Genuine product. Fair price. Fast delivery. Honest warranty. Real
              human support. Every order, every time.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}