import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import purgeCss from 'vite-plugin-purgecss'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), purgeCss({
    content: [
      `./index.html`,
      `./src/**/*.vue`,
      `./src/**/*.js`,
      `./src/**/*.ts`,
    ],
  }),
  visualizer({
    open: true,
    filename: './dist/stats.html',
    gzipSize: true,
    brotliSize: true,
  })
],
  build: {
    minify: 'terser',
    cssCodeSplit: true,
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})
