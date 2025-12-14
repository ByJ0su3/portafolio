import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio/',  // Esto hace que Vite genere rutas correctas
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Esto genera nombres SIN hash
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      }
    }
  }
})