
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',      // 🔥 This exposes your dev server to LAN
    port: 5173,           // or 3000 or any open port
    strictPort: true      // avoid auto port switching
  }
});
