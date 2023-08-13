// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/scroll-back-button',
  root: './demo/',
  build: {
      outDir: '../docs',
      emptyOutDir: true,
  }
});
