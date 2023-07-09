import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (): boolean => true
      }
    }
  })],
  base: '/scroll-back-button',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  }
})
