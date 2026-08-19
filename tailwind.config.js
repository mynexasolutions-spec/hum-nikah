/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: 'var(--color-brand-emerald)',
          'emerald-hover': 'var(--color-brand-emerald-hover)',
          'deep-green': 'var(--color-brand-deep-green)',
          navy: 'var(--color-brand-navy)',
          crimson: 'var(--color-brand-crimson)',
          maroon: 'var(--color-brand-maroon)',
          gold: 'var(--color-brand-gold)',
          'soft-gold': 'var(--color-brand-soft-gold)',
          white: 'var(--color-brand-white)',
          cream: 'var(--color-brand-cream)',
          beige: 'var(--color-brand-beige)',
          'light-cream': 'var(--color-brand-light-cream)',
          charcoal: 'var(--color-brand-charcoal)',
          secondary: 'var(--color-brand-secondary)',
          border: 'var(--color-brand-border)',
          'soft-green': 'var(--color-brand-soft-green)',
        }
      },
      fontFamily: {
        playfair: ['var(--font-playfair-display)', '"Playfair Display"', 'serif'],
        montserrat: ['var(--font-montserrat)', '"Montserrat"', 'sans-serif'],
        poppins: ['var(--font-montserrat)', '"Montserrat"', 'sans-serif'],
      },
      maxWidth: {
        wrap: "1350px",
      },
    },
  },
  plugins: [],
};
