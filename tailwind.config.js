/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        'navy-mid': '#0f2040',
        'navy-light': '#1a3460',
        gold: '#c9a84c',
        'gold-light': '#e8c87a',
      },
    },
  },
  plugins: [],
}
