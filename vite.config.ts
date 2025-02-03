import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    target: "ES2022"
  },
  plugins: [react()],
  server: {
    open: "dsa-notes"
  }
})