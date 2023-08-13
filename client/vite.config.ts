import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import path from 'path'
import svgr from 'vite-plugin-svgr'
import lightningcss from 'vite-plugin-lightningcss'
import legacy from '@vitejs/plugin-legacy'

const viteEnv: { [key: string]: string } = {}

Object.keys(process.env).forEach((key) => {
  if (key.startsWith(`VITE_`)) {
    Object.assign(viteEnv, { [`import.meta.env.${key}`]: process.env[key] })
  }
})

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['>0.2%', 'chrome > 38', 'dead'],
    }),
    eslint(),
    svgr(),
    lightningcss({
      minify: true,
      browserslist: ['>0.2%', 'chrome > 38', 'dead'],
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:1880',
      },
      '/ws': {
        target: 'http://localhost:1880',
        ws: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
