// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 建議使用相對路徑，這樣不管放在哪裡都能正確抓到 js/css/圖片
})