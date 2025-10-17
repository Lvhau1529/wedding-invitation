import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [vue(), tailwindcss(), imagetools()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 9000
  },
  build: {
    assetsInlineLimit: 0,
    cssMinify: 'lightningcss'
  }
})
