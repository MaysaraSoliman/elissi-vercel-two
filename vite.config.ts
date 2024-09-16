import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Splits third-party libraries into a separate chunk called vendor
          }
        },
      },
    },
    chunkSizeWarningLimit: 1200 // Increase the chunk size limit warning to 1000 kB
  }
})
