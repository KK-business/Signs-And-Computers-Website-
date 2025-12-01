import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to the repository path so built asset URLs resolve on GitHub Pages.
// If you prefer relative assets, use base: './' instead.
export default defineConfig({
  base: '/Signs-And-Computers-Website-/',
  plugins: [react()],
})