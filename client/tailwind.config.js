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
        primary: '#14ef0c',
        dark: '#0e210e',
      },
    },
  },
  plugins: [require('tw-elements-react/dist/plugin.cjs'), require('@tailwindcss/container-queries')],
  darkMode: 'class',
}
