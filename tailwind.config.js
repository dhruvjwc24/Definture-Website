/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1A1A18',
        linen: '#F0EEE7',
        surface: '#F7F5F0',
        brass: '#A8823A',
        ash: '#6B6862',
        hairline: '#DFDAD0',
        charcoal: '#242220',
        sand: '#A39E93',
        'hairline-dark': '#4A473F',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Geist', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
