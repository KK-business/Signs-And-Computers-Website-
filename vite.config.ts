import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Signs-And-Computers-Website-/', // IMPORTANT: set to repo path for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['lenis', 'three'],
  },
});
