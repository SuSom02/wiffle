// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/wiffle/',  // 이 줄 추가!!
  plugins: [react()],
})
