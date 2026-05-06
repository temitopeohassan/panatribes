module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))"
      },
      borderRadius: {
        lg: "var(--radius)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,215,0,0.35)"
      }
    }
  },
  plugins: []
}
