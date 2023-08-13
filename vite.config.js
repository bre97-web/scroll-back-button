// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: '/scroll-back-button',
  root: './demo/',
  build: {
      outDir: '../docs',
      emptyOutDir: true,
  }
});
