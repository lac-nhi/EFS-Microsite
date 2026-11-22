import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // The Four Futures section is lazy-loaded; pre-bundle its libraries so the dev server
  // doesn't discover them mid-visit and serve a second copy of React
  optimizeDeps: {
    include: ['framer-motion', 'd3', 'topojson-client', 'chart.js', 'lucide-react'],
  },
  server: {
    // Lets the dev server answer through a temporary Cloudflare tunnel link (for sharing previews)
    allowedHosts: ['.trycloudflare.com'],
  },
})
