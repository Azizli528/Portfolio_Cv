import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' GitHub Pages-də hər hansı repo adı ilə işləməsi üçündür
export default defineConfig({
  plugins: [react()],
  base: './',
})
