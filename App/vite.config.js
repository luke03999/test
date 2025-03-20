import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html', 'lcov'], // Assicurati che 'lcov' sia incluso
      reportsDirectory: './coverage', // Specifica la cartella di output
      all: true, // Include tutti i file, anche quelli non testati
      exclude: ['node_modules', 'dist'], // Esclude test ed elementi inutili
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
