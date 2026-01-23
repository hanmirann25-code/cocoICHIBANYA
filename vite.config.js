import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포를 위한 base URL 설정
  // 저장소 이름으로 변경하세요! 예: base: '/cocoICHIBANYA/'
  base: '/your-repository-name/',
})
