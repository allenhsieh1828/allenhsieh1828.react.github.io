// src/data.js
import htmlImg from './assets/html.jpg';
import cssImg from './assets/css.jpg';
import javascriptImg from './assets/javascript.jpg';
import awsImg from './assets/aws.jpg';
import reactImg from './assets/react.jpg';
import figmaImg from './assets/figma.jpg';

export const SKILLS_LIST = [
  { id: 'html', name: 'HTML', icon: htmlImg, type: 'image' },
  { id: 'css', name: 'CSS', icon: cssImg, type: 'image' },
  { id: 'js', name: 'JavaScript', icon: javascriptImg, type: 'image' },
  { id: 'cursor', name: 'Cursor', label: 'Cursor', color: '#fff', type: 'text' },
  { id: 'aws', name: 'AWS', icon: awsImg, type: 'image' },
  { id: 'react', name: 'React', icon: reactImg, type: 'image' },
  { id: 'figma', name: 'Figma', icon: figmaImg, type: 'image' },
  { id: 'upcoming', name: '敬請期待', label: '敬請期待', color: '#c9a063', type: 'text', hideLabel: true },
];

export const PROJECTS_LIST = [
    {
    id: 'picklematch',
    title: '匹克球媒合平台',
    desc: '是一個現代化的匹克球社交媒合平台，讓運動愛好者能夠輕鬆發掘、參加或舉辦本地球局。整合即時資料同步、無縫使用者體驗與企業級安全機制，提供社區驅動的球類運動新體驗',
    tech: ['Next.js', 'React', 'TypeScript','Tailwind CSS', 'Lucide-React', 'Supabase', 'SQL'],
    link: 'https://picklematch-m56p.vercel.app',
    github: 'https://github.com/allenhsieh1828/picklematch'
  },
  {
    id: 'todo-finance',
    title: '待辦清單與財務管理系統',
    desc: '基於 React 開發的代辦事項結合財務管理系統。整合日曆規劃、動態數據圖表分析，並針對行動裝置進行適配優化。',
    tech: ['React', 'Framer Motion', 'Lucide-React', 'Vite'],
    link: 'https://allenhsieh1828.github.io/to-do-list/',
    github: 'https://github.com/allenhsieh1828/to-do-list'
  },
  {
    id: 'fitstack',
    title: '互動式簽到紀錄系統',
    desc: '基於 React 開發的互動式簽到系統。整合實時狀態監測與數據儲存功能，提供直觀的用戶介面，並針對不同螢幕尺寸進行響應式佈局優化，確保在行動端與桌機端皆能流暢操作。',
    tech: ['React', 'CSS3/SCSS', 'Firebase','Framer Motion', 'Lucide-React', 'Vite'],
    link: 'https://allenhsieh1828.github.io/fitstack/',
    github: 'https://github.com/allenhsieh1828/fitstack'
  }
];