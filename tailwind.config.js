/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'bg-color': '#E8ECEC',
        'bg-header': '#0B4A51',
      },
      colors: {
        'btn-color': '#8B5032',
        'hover-color': '#AC8071',
        'dark-teal': '#0B4A51',
        'potter-clay': '#8B5032',
        'rose-white': '#FFF6F1',
        'dawn-pink': '#E8ECEC',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'halant': ['Halant', 'serif'],
        'hammersmith-one': ['Hammersmith One', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

