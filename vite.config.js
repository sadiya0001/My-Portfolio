import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served by GitHub Pages under /My-Portfolio/
export default defineConfig({
  base: '/My-Portfolio/',
  plugins: [react()],
})
