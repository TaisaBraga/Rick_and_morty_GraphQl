/// <reference types="vitest" /> 
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Rick_and_morty_GraphQl",
  test: {
    globals: true,
    setupFiles: 'src/setupTests.js',
  }
})
