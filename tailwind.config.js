/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#7ba152',
          light: '#eaf6ed',
          dark: '#17361e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

