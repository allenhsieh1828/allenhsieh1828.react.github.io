# 謝博丞 (Allen Hsieh) - 個人動態作品集 

這是一個基於 **React** 與 **Framer Motion** 開發的高層次感個人作品集部落格。採用單頁式捲動設計（Scroll Snap），並深耕於極致的「深色模式（Dark Aesthetics）」視覺體驗，展現前端開發技術與對現代 Web 設計趨勢的掌握。

## 🚀 專案亮點

- **沉浸式深色視覺 (Dark-only Design)**：採用深紫黑色調 `#0d0216` 搭配香檳金 `#c9a063`，營造專業且具有科技感的閱讀氛圍。
- **強勢垂直吸附 (Scroll Snap)**：實作 CSS Scroll Snap 效果，確保使用者每一點擊或滑動，都能精準對齊作品集的關鍵內容區塊。
- **動態顯現動畫 (Scroll Reveal)**：使用 `framer-motion` 實作元件進入視窗時的浮現特效，特別是在技能網格中加入了「交錯彈出（Stagger）」節奏感。
- **自定義金色捲動條**：重塑瀏覽器原生捲動條，以極簡的金色滑軌取代傳統設計，確保 UI 細節從頭到尾的一致性。
- **沉浸式背景音樂**：內建懸浮控制按鈕，允許使用者在瀏覽過程中開啟背景音軌，提升互動深度。

## 🛠 技術棧

- **前端框架**: React 18
- **動畫核心**: Framer Motion
- **樣式技術**: CSS3 (Variables, Webkit-scrollbar, Flexbox/Grid)
- **開發工具**: Vite, Cursor (AI 輔助代碼優化)
- **部署平台**: GitHub Pages

## 🛠 資料夾結構
src/
├── assets/          # 圖片資源、背景音軌 (MP3)
├── App.jsx          # 核心邏輯與 Framer Motion 動畫配置
├── App.css          # 全域樣式、捲動捕捉與自定義 Scrollbar
└── main.jsx         # 進入點