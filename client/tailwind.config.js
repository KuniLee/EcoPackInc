/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/tw-elements-react/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Product Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tw-elements-react/dist/plugin.cjs')],
  darkMode: 'class',
}
