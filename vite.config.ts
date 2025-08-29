import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ToDoList/',
  test: {
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    globals: true,
    css: true,
  }
})
