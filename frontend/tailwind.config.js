/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'var(--font-inter)', 'var(--font-geist-sans)', 'sans-serif'],
        mono: ['JetBrains Mono', 'var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
