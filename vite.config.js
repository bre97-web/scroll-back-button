// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/scroll-button',
  root: './demo/',
  build: {
      outDir: '../docs',
      emptyOutDir: true,
  }
});
