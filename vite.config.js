import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포를 위한 base URL 설정
  base: '/cocoICHIBANYA/',
  build: {
    // 상대 경로로 빌드
    assetsInlineLimit: 0,
  },
})
