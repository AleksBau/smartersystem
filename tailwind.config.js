/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#1A56E8',
          dark: '#0F3BAA',
          deep: '#091F6B',
        },
        cyan: '#38BDF8',
        navy: '#0B1B4D',
        light: '#F0F4FF',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
