import React from "react";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">

      {/* MAIN */}
      <main className="flex-1">
        {/* HERO */}
        <section className="border-b border-border/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <p className="text-sm font-medium text-accent uppercase tracking-widest">
              Contact
            </p>
            <h1 className="mt-2 font-display text-5xl sm:text-6xl font-bold tracking-tight">
              Let&apos;s <span className="text-gradient-gold">talk</span>.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Sales, support, partnerships, or just curious — we read every
              message and reply within hours.
            </p>
          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
            {/* LEFT INFO */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  title: "WhatsApp",
                  value: "+234 800 PANATRIBES",
                  desc: "Fastest channel — real humans.",
                },
                {
                  title: "Phone",
                  value: "+234 800 PANATRIBES",
                  desc: "Mon – Sat, 9am – 7pm WAT.",
                },
                {
                  title: "Email",
                  value: "hello@panatribes.com",
                  desc: "Replies within 24 hours.",
                },
                {
                  title: "Visit",
                  value: "Lagos, Nigeria",
                  desc: "Showroom by appointment.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-border/50 bg-card p-6 hover:border-accent/40 transition-smooth"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.title}
                  </p>
                  <p className="font-display font-semibold mt-1">
                    {item.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* FORM */}
            <form className="lg:col-span-3 rounded-3xl border border-border/50 bg-card p-8 space-y-5">
              <h2 className="font-display text-2xl font-bold">
                Send us a message
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium block mb-1.5">
                    Name
                  </label>
                  <input className="w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Phone (WhatsApp)
                </label>
                <input className="w-full h-11 rounded-xl border border-border bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background p-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Contact;