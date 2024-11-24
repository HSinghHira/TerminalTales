// vite.config.js
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: './build',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes('tools-')) {
            return `assets/${chunkInfo.name.split('-').slice(0, -1).join('-')}.js`
          }
          return 'assets/[name].js'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'assets/index.css'
          }
          return 'assets/[name][extname]'
        },
        manualChunks(id) {
          // Vendor chunks with unique names
          if (id.includes('node_modules')) {
            // Framework core
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'framework-main'
            }
            // State management
            if (id.includes('redux') || id.includes('@reduxjs')) {
              return 'state-manager'
            }
            // Routing related
            if (id.includes('react-router')) {
              return 'navigation'
            }
            // UI related dependencies
            if (id.includes('react-')) {
              return 'ui-components'
            }
            // Other third-party dependencies
            return 'external-utils'
          }
          // Tools chunks
          if (id.includes('/Tools/')) {
            const category = id.split('/Tools/')[1].split('/')[0]
            return `tools-${category.toLowerCase()}`
          }
          // Components chunk
          if (id.includes('/components/')) {
            return 'components'
          }
          // Pages/routes chunk
          if (id.includes('/pages/') || id.includes('/routes/')) {
            return 'pages'
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
