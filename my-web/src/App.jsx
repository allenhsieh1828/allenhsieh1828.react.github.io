import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// 匯入資源
import bgMusic from './assets/bg-music.mp3';
import avatarImg from './assets/avatar.jpg';
import backgroundWall from './assets/background.jpg';

// 匯入資料 (關鍵改動)
import { SKILLS_LIST, PROJECTS_LIST } from './data';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// 子組件：技能項目
const SkillItem = ({ skill, index }) => (
  <motion.div className="skill-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
    <div className="icon-box">
      {skill.type === 'image' ? <img src={skill.icon} alt={skill.name} className="skill-icon-img" /> : <span style={{ color: skill.color, fontWeight: 'bold' }}>{skill.label}</span>}
    </div>
    {!skill.hideLabel && <p>{skill.name}</p>}
  </motion.div>
);

// 子組件：作品卡片
const ProjectCard = ({ proj }) => (
  <motion.div className="contact-card project-card" whileHover={{ scale: 1.02 }}>
    <h3>{proj.title}</h3>
    <p>{proj.desc}</p>
    <div className="tech-tag-group">
      {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
    </div>
    <div className="project-links">
      <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">🔗 觀看成品</a>
      <a href={proj.github} target="_blank" rel="noreferrer" className="github-link">Source Code</a>
    </div>
  </motion.div>
);

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleMusicClick = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app-container">
      <audio ref={audioRef} src={bgMusic} loop />

      {/* Hero Section */}
      <motion.section className="snap-section hero-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} style={{ backgroundImage: `linear-gradient(rgba(13, 2, 22, 0.6), #0d0216), url(${backgroundWall})` }}>
        <div className="hero-content">
          <header className="hero-header">
            <motion.div className="title-area" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
              <h1>謝博丞</h1>
            </motion.div>
            <motion.div className="profile-avatar" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}>
              <img src={avatarImg} alt="頭像" />
            </motion.div>
          </header>
          <motion.div className="intro-text-group" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}>
            <p>我是謝博丞，畢業於亞洲大學資訊工程學系。在學期間，我建立了紮實的程式基礎，並對 Web 前端開發產生濃厚興趣，專注於 HTML、CSS、JavaScript 及 React 框架的學習與實作。</p>
            <p>在專案中，我注重版面結構與使用者操作流程。我追求的目標不只是做出「能用」的網站，而是希望透過細膩的介面調整，打造出「好用」且具備良好跨裝置顯示體驗的互動介面。</p>
            <p>我熟悉 React 框架開發，並能運用 Git 進行版本控制，確保團隊協作的穩定性。也具備 API 串接與測試經驗，確保前端與後端資料流的正確認。善於運用 GPT、Gemini 等 AI 工具輔助開發與問題排查，以提升學習速度與解決問題的效率。我也樂於與設計師或後端工程師合作，將需求精確地轉化為穩定、清楚的前端實作。</p>
            <p>未來希望在實際的產品開發流程中以配合度高、踏實學習的態度，為團隊貢獻實質的協助，並持續精進前端技術。</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="snap-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <div className="content-wrapper">
          <h2 className="section-title">技能掌握</h2>
          <div className="skills-grid">
            {SKILLS_LIST.map((skill, index) => <SkillItem key={skill.id} skill={skill} index={index} />)}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="snap-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        <div className="content-wrapper">
          <h2 className="section-title">作品專案</h2>
          <div className="projects-list">
            {PROJECTS_LIST.map(proj => <ProjectCard key={proj.id} proj={proj} />)}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="snap-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <div className="content-wrapper">
          <h2 className="section-title">聯絡我</h2>
          <motion.div className="contact-card" whileHover={{ y: -5 }}>
            <p><strong>Email:</strong> allenhsieh1828@gmail.com</p>
            <p><strong>Tel:</strong> 0911730966</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.button className="music-play-btn" onClick={handleMusicClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {isPlaying ? <div className="pause-icon" /> : <div className="play-icon" />}
      </motion.button>
    </div>
  );
}

export default App;