import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/IBM_FS_05_04_eventPlanner",
  plugins: [react()],
})
