import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  server : {
    proxy : {
      '/new_registration' : 'https://streaks-api.vercel.app',
    }
  },
  plugins: [react()],
  
})
