import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portafolio/',
  build: {
    outDir: 'dist',
    // AÑADE ESTO PARA WINDOWS:
    emptyOutDir: false,  // ← IMPORTANTE: No vaciar la carpeta automáticamente
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      }
    }
  }
})