import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Exporting Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Simplify imports using '@'
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'], // Optimize chunk splitting
        },
      },
    },
  },
  server: {
    port: 3001, // Set the dev server port
    open: true, // Automatically open the browser
    strictPort: true, // Ensure the port is strictly used
    watch: {
      usePolling: true, // Fix issues with file system watchers in some environments
    },
  },
});
