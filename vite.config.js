import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/<PORTFOILIO>/',   // 👈 replace <repo-name> with your GitHub repo name
})
