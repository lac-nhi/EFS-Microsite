import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Lets the dev server answer through a temporary Cloudflare tunnel link (for sharing previews)
    allowedHosts: ['.trycloudflare.com'],
  },
})
