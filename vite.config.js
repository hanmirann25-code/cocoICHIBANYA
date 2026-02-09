import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // 개발 환경에서는 '/', 배포 환경에서는 '/cocoICHIBANYA/'
  base: mode === 'production' ? '/cocoICHIBANYA/' : '/',
}))
