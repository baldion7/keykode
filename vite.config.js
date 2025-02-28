import { defineConfig } from 'vite'
import { default as createSitemap } from "vite-plugin-sitemap";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    createSitemap({
      baseUrl: "https://keykode.tech",
      routes: ["/", "/about", "/services", "/projects", "/contact"],
    }),
  ],
})
