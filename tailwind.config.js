/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        borderChange: {
          '0%': { borderLeftColor: 'transparent', borderRightColor: 'transparent' },
          '100%': { borderLeftColor: 'gray', borderRightColor: 'gray' },
        },
      },
      animation: {
        borderChange: 'borderChange 1s ease-in-out forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
