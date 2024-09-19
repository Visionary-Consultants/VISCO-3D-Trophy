import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-AJ3BHM66', 'chunk-UAE4ABNQ', 'chunk-6VWAHX6D']
  }
})
