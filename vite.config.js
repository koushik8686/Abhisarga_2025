import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://abhisarga-iiits.in",
      routes: [
        "/", "/about", "/events", "/schedule",
        "/merch", "/call-for-sponsors",
        "/sponsors", "/contact", "/accommodation"
      ],
    }),
  ],
});
