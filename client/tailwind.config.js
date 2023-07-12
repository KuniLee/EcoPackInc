/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/tw-elements-react/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#249d1f',
          50: '#F1F5FB',
          100: '#E3EBF7',
          200: '#C7D7F0',
          300: '#ABC2E8',
          400: '#8FAEE0',
          500: '#6590D5',
          600: '#16d712',
          700: '#1e860e',
          800: '#204075',
          900: '#183058',
          'accent-100': '#d9e4f3',
          'accent-200': '#cedbee',
        },
        dark: '#0e210e',
      },
    },
  },
  plugins: [require('tw-elements-react/dist/plugin.cjs'), require('@tailwindcss/container-queries')],
  darkMode: 'class',
}
