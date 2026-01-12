import React, { useState, useRef } from 'react';
import './App.css';

// --- 資源匯入 ---
import bgMusic from './assets/bg-music.mp3';
import avatarImg from './assets/avatar.jpg'; 
import backgroundWall from './assets/background.jpg';

import htmlImg from './assets/html.jpg';  
import cssImg from './assets/css.jpg';    
import javascriptImg from './assets/javascript.jpg';  
import awsImg from './assets/aws.jpg';    
import reactImg from './assets/react.jpg'; 

// --- 技能資料定義 ---
const SKILLS_LIST = [
  { id: 'html', name: 'HTML', icon: htmlImg, type: 'image' },
  { id: 'css', name: 'CSS', icon: cssImg, type: 'image' },
  { id: 'js', name: 'JavaScript', icon: javascriptImg, type: 'image' },
  { id: 'cursor', name: 'Cursor', label: 'Cursor', color: '#fff', type: 'text' },
  { id: 'aws', name: 'AWS', icon: awsImg, type: 'image' },
  { id: 'react', name: 'React', icon: reactImg, type: 'image' },
  { id: 'upcoming', name: '敬請期待', label: '敬請期待', color: '#c9a063', type: 'text', hideLabel: true },
];

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleMusicClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app-container">
      <audio ref={audioRef} src={bgMusic} loop />

      {/* --- 第一區塊：自我介紹 (Hero Section) --- */}
      <section 
        className="snap-section hero-section" 
        style={{ backgroundImage: `linear-gradient(rgba(13, 2, 22, 0.6), #0d0216), url(${backgroundWall})` }}
      >
        <div className="hero-content">
          <header className="hero-header">
            <div className="title-area">
              <h1>謝博丞</h1>
            </div>
            <div className="profile-avatar">
              <img src={avatarImg} alt="謝博丞頭像" />
            </div>
          </header>

          <div className="intro-text-group">
            <p>
              我是謝博丞，畢業於亞洲大學資訊工程學系。在學期間，我建立了紮實的程式基礎，並對 Web 前端開發產生濃厚興趣，專注於 HTML、CSS、JavaScript 及 React 框架的學習與實作。
            </p>
            <p>
              在專案中，我注重版面結構與使用者操作流程。我追求的目標不只是做出「能用」的網站，而是希望透過細膩的介面調整，打造出「好用」且具備良好跨裝置顯示體驗的互動介面。
我熟悉 React 框架開發，並能運用 Git 進行版本控制，確保團隊協作的穩定性。也具備 API 串接與測試經驗，確保前端與後端資料流的正確認。善於運用 GPT、Gemini 等 AI 工具輔助開發與問題排查，以提升學習速度與解決問題的效率。我也樂於與設計師或後端工程師合作，將需求精確地轉化為穩定、清楚的前端實作。
            </p>
            <p>
              未來希望在實際的產品開發流程中以配合度高、踏實學習的態度，為團隊貢獻實質的協助，並持續精進前端技術。
            </p>
          </div>
        </div>
      </section>

      {/* --- 第二區塊：技能掌握 (Skills Section) --- */}
      <section className="snap-section">
        <div className="content-wrapper">
          <h2 className="section-title">技能掌握</h2>
          <div className="skills-grid">
            {SKILLS_LIST.map((skill) => (
              <div className="skill-item" key={skill.id}>
                <div className="icon-box">
                  {skill.type === 'image' ? (
                    <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                  ) : (
                    <span style={{ color: skill.color, fontWeight: 'bold' }}>{skill.label}</span>
                  )}
                </div>
                {!skill.hideLabel && <p>{skill.name}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 第三區塊：聯絡我 (Contact Section) --- */}
      <section className="snap-section">
        <div className="content-wrapper">
          <h2 className="section-title">聯絡我</h2>
          <div className="contact-card">
            <p><strong>Email:</strong> allenhsieh1828@gmail.com</p>
            <p><strong>Tel:</strong> 0911730966</p>
          </div>
        </div>
      </section>

      {/* 懸浮音樂按鈕：位於 snap 容器外，不參與捲動吸附 */}
      <button className="music-play-btn" onClick={handleMusicClick} aria-label="播放音樂控制">
        {isPlaying ? <div className="pause-icon"></div> : <div className="play-icon"></div>}
      </button>
    </div>
  );
}

export default App;