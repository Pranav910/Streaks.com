import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // server : {
  //   proxy : {
  //     '/new_registration' : 'http://localhost:5000',
  //     '/user-login' : 'http://localhost:5000',
  //     '/streaks-option' : 'http://localhost:5000',
  //   }
  // },
  plugins: [react()],
  
})
