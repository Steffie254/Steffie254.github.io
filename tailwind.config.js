/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        ink: '#FFF7F2',      // page background (warm cream)
        plum: '#6D2E46',
        cocoa: '#7A4E3A',
        pink: '#D4447E',
        blush: '#B8336A',    // deep pink for accent text on light backgrounds
        nude: '#3B2330',     // main text (dark cocoa-plum)
        gold: '#B7791F',
        card: '#FFFFFF',
        petal: '#FDE4EE',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
