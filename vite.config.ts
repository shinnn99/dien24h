import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFile, mkdir } from 'node:fs/promises'

const sitesWorker = () => ({
  name: 'sites-worker',
  async closeBundle() {
    await mkdir('dist/server', { recursive: true })
    await copyFile('server/index.js', 'dist/server/index.js')
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sitesWorker()],
})
