/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        dark: {
          bg: '#080c14',
          surface: '#0d131f',
          card: '#121a2b',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: '#192338',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.2)',
        'glow-md': '0 0 25px rgba(99, 102, 241, 0.3)',
      }
    },
  },
  plugins: [],
}
