import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const menuItems = [
  { id: 'status', label: 'STATUS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'quests', label: 'QUESTS' },
  { id: 'system', label: 'SYSTEM' }
];

const menuContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

const menuItemAnim = {
  hidden: { opacity: 0, x: -100, skewX: -15 },
  show: { opacity: 1, x: 0, skewX: -15, transition: { type: "spring", stiffness: 80 } }
};

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const playHoverSound = () => {
    const audio = new Audio('/hover.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => { });
  };

  const playClickSound = () => {
    const audio = new Audio('/click.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => { });
  };

  const startGame = () => {
    if (!gameStarted) {
      playClickSound();
      setGameStarted(true);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'status':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', paddingRight: isMobile ? '5px' : '15px', height: '100%' }}>
            <div>
              {/* NOME ALTERADO AQUI */}
              <h3 style={{ fontSize: isMobile ? '2rem' : '3rem', color: '#FFFFFF', textShadow: '2px 2px 0px #000' }}>DANIEL S DE OLIVEIRA</h3>
              <div style={{ color: '#A0D2EB', fontSize: isMobile ? '1rem' : '1.2rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '-5px' }}>Class: Back-end Developer & Data Analyst</div>
            </div>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderLeft: '4px solid #00BFFF' }}>
              <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', lineHeight: '1.6' }}>Focado em unir a robustez da engenharia de software com a inteligência de dados. Atualmente liderando automações de documentos e criando dashboards interativos.</p>
            </div>
            <div>
              <h4 style={{ color: '#00BFFF', fontSize: isMobile ? '1.2rem' : '1.5rem', borderBottom: '1px solid rgba(0, 191, 255, 0.3)', paddingBottom: '5px', marginBottom: '10px' }}>CURRENT GUILD</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: isMobile ? '1.1rem' : '1.3rem', fontWeight: 'bold' }}>Rei dos Motores</span><span style={{ color: '#A0D2EB', fontSize: '0.9rem' }}>Abr 2025 - Atual</span></div>
              <p style={{ fontSize: '1rem', color: '#CCC', marginTop: '5px' }}> DEV</p>
            </div>
            <div>
              <h4 style={{ color: '#00BFFF', fontSize: isMobile ? '1.2rem' : '1.5rem', borderBottom: '1px solid rgba(0, 191, 255, 0.3)', paddingBottom: '5px', marginBottom: '10px' }}>ACADEMICS</h4>
              <div style={{ marginBottom: '15px' }}><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}><span style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>Pós-graduação em Data Analytics</span><span style={{ color: '#A0D2EB', fontSize: '0.9rem' }}>FIAP</span></div></div>
              <div><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}><span style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>Análise e Desenvolvimento de Sistemas</span><span style={{ color: '#A0D2EB', fontSize: '0.9rem' }}>FACENS</span></div></div>
            </div>
          </div>
        );

      case 'skills':
        const skillsParty = [
          { name: 'JAVA / SPRING', level: 'Lv 45', hp: '85%', sp: '70%' },
          { name: 'JAVASCRIPT', level: 'Lv 40', hp: '80%', sp: '80%' },
          { name: 'PYTHON', level: 'Lv 42', hp: '80%', sp: '75%' },
          { name: 'BANCO DE DADOS', level: 'Lv 40', hp: '90%', sp: '80%' },
          { name: 'APIs REST', level: 'Lv 38', hp: '85%', sp: '85%' },
          { name: 'REACT', level: 'Lv 35', hp: '70%', sp: '90%' },
          { name: 'HTML5 / CSS3', level: 'Lv 30', hp: '95%', sp: '40%' }
        ];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', paddingLeft: isMobile ? '0' : '20px', overflowY: 'auto', height: '100%', paddingRight: isMobile ? '5px' : '15px' }}>
            {skillsParty.map((skill, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: 'rgba(5, 10, 31, 0.9)', border: '2px solid #00BFFF', padding: isMobile ? '8px' : '10px 20px', transform: 'skewX(-10deg)', boxShadow: '4px 4px 0px rgba(0,0,0,0.5)', width: '100%', minWidth: isMobile ? '0' : '400px' }}>
                <div style={{ width: isMobile ? '40px' : '50px', height: isMobile ? '40px' : '50px', backgroundColor: '#00BFFF', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', transform: 'skewX(10deg)' }}><span style={{ color: '#050A1F', fontWeight: 'bold' }}>{skill.name.charAt(0)}</span></div>
                <div style={{ flex: 1, transform: 'skewX(10deg)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span style={{ fontWeight: 'bold', fontSize: isMobile ? '0.9rem' : '1.1rem', textShadow: '1px 1px 0px #000' }}>{skill.name}</span><span style={{ color: '#A0D2EB', fontSize: '0.8rem' }}>{skill.level}</span></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '3px' }}><span style={{ fontSize: '0.6rem', color: '#B2FF59', width: '20px' }}>HP</span><div style={{ height: '5px', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #333' }}><div style={{ width: skill.hp, height: '100%', backgroundColor: '#B2FF59', boxShadow: '0 0 5px #B2FF59' }}></div></div></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><span style={{ fontSize: '0.6rem', color: '#00BFFF', width: '20px' }}>SP</span><div style={{ height: '5px', flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #333' }}><div style={{ width: skill.sp, height: '100%', backgroundColor: '#00BFFF', boxShadow: '0 0 5px #00BFFF' }}></div></div></div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'quests':
        const questsList = [
          { title: 'ITAM System', client: 'Rei dos Motores', status: 'IN PROGRESS', techs: 'SaaS • Dashboards', desc: 'Sistema de Gestão de Ativos de TI para controle financeiro, histórico de manutenção, licenciamento de softwares e controle de linhas telefônicas.' },
          { title: 'Data Dashboards', client: 'Rei dos Motores', status: 'CLEARED', techs: 'Power BI • Forms', desc: 'Automatização de documentos corporativos e criação de dashboards em tempo real para tomada de decisão estratégica.' },
          { title: 'Dental Clinic App', client: 'Freelance', status: 'CLEARED', techs: 'Scripts • Integração', desc: 'Desenvolvimento de sistema automático de lembretes e agendamentos, reduzindo faltas e eliminando duplicidades.' },
          { title: 'Mentor Novices', client: 'FACENS', status: 'CLEARED', techs: 'Java • Algorithms', desc: 'Suporte prático para alunos na implementação de algoritmos complexos (Árvores, Grafos).' }
        ];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto', paddingRight: isMobile ? '5px' : '15px', height: '100%' }}>
            {questsList.map((quest, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }} style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(0, 191, 255, 0.4)', padding: isMobile ? '15px' : '20px', position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                <div style={{ position: 'absolute', right: '-20px', top: '-20px', width: '80px', height: '80px', backgroundColor: 'rgba(0, 191, 255, 0.1)', transform: 'rotate(45deg)' }} />
                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-start', gap: '10px', marginBottom: '10px' }}>
                  <div><h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem', color: '#FFFFFF', textTransform: 'uppercase' }}>{quest.title}</h3><span style={{ color: '#A0D2EB', fontSize: '0.8rem', letterSpacing: '1px' }}>Client: {quest.client}</span></div>
                  <div style={{ border: `2px solid ${quest.status === 'CLEARED' ? '#B2FF59' : '#00BFFF'}`, color: quest.status === 'CLEARED' ? '#B2FF59' : '#00BFFF', padding: '3px 10px', fontWeight: 'bold', transform: 'rotate(5deg)', fontSize: '0.8rem', letterSpacing: '1px', boxShadow: `0 0 10px ${quest.status === 'CLEARED' ? 'rgba(178,255,89,0.2)' : 'rgba(0,191,255,0.2)'}` }}>{quest.status}</div>
                </div>
                <div style={{ color: '#00BFFF', fontSize: '0.7rem', marginBottom: '10px', fontWeight: 'bold' }}>[ REWARD / TECH: {quest.techs} ]</div>
                <p style={{ fontSize: isMobile ? '0.9rem' : '1.1rem', lineHeight: '1.5', color: '#E0E0E0' }}>{quest.desc}</p>
              </motion.div>
            ))}
          </div>
        );

      case 'system':
        const systemOptions = [
          {
            icon: <FaFileDownload />,
            label: 'SAVE DATA',
            sub: 'Download Resume',
            action: () => {
              playClickSound();
              const link = document.createElement('a');
              link.href = '/curriculo_Daniel_SOUSA_2026.pdf';
              link.target = '_blank';
              link.download = 'curriculo_Daniel_SOUSA_2026.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          },
          { icon: <FaLinkedin />, label: 'NETWORK', sub: 'LinkedIn', action: () => { playClickSound(); window.open('https://www.linkedin.com/in/daniel-sousa-842964393/', '_blank'); } },
          { icon: <FaGithub />, label: 'SOURCE', sub: 'GitHub', action: () => { playClickSound(); window.open('https://github.com/Danielsouusas', '_blank'); } },
          { icon: <FaEnvelope />, label: 'COMMS', sub: 'E-mail', action: () => { playClickSound(); window.location.href = 'mailto:gdsousa3@gmail.com'; } }
        ];
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '15px' : '20px', padding: '10px', height: '100%', justifyContent: 'center' }}>
            {systemOptions.map((opt, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.15 }} whileHover={{ scale: 1.02, backgroundColor: '#00BFFF', color: '#050A1F' }} onMouseEnter={!isMobile ? playHoverSound : undefined} onClick={opt.action}
                style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: isMobile ? '15px 20px' : '20px 30px', cursor: 'pointer', border: '2px solid #00BFFF', backgroundColor: 'rgba(0, 191, 255, 0.1)', color: '#FFFFFF', transform: 'skewX(-10deg)', transition: 'all 0.2s ease', boxShadow: '4px 4px 0px rgba(0,0,0,0.5)' }}>
                <div style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', transform: 'skewX(10deg)' }}>{opt.icon}</div>
                <div style={{ transform: 'skewX(10deg)' }}><h3 style={{ fontSize: isMobile ? '1.2rem' : '1.8rem', letterSpacing: '2px', margin: 0 }}>{opt.label}</h3><span style={{ fontSize: isMobile ? '0.8rem' : '1rem', opacity: 0.8 }}>{opt.sub}</span></div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', backgroundColor: '#050A1F' }} onClick={startGame}>
      {gameStarted && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.8 }} transition={{ duration: 2 }} style={{ position: 'absolute', top: '10%', right: isMobile ? '-10%' : '15%', width: isMobile ? '200px' : '350px', height: isMobile ? '200px' : '350px', borderRadius: '50%', backgroundColor: '#E0F7FA', boxShadow: '0 0 80px 20px rgba(0, 191, 255, 0.2), inset -30px -30px 50px rgba(0,0,0,0.3)', zIndex: 1, pointerEvents: 'none', filter: 'blur(2px)' }} />
      )}

      <AnimatePresence>
        {!gameStarted ? (
          <motion.div
            key="title-screen" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }} transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', cursor: 'pointer', zIndex: 10,
              backgroundImage: "url('/title-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', boxShadow: 'inset 0 0 0 2000px rgba(5, 10, 31, 0.3)'
            }}
          >
            {/* TELA DE INÍCIO ALTERADA PARA DANIEL */}
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ fontSize: isMobile ? '3.5rem' : '5.5rem', letterSpacing: '4px', color: '#00BFFF', textShadow: '4px 4px 0px #000', textTransform: 'uppercase', textAlign: 'center' }}>DANIEL</motion.h1>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} style={{ fontSize: isMobile ? '1.2rem' : '1.8rem', letterSpacing: '4px', marginTop: '10px', color: '#FFF', textShadow: '2px 2px 0px #000', textTransform: 'uppercase' }}>PORTFOLIO</motion.h2>
            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }} style={{ position: 'absolute', bottom: '10%', fontSize: isMobile ? '1rem' : '1.4rem', color: '#FFFFFF', textShadow: '2px 2px 0px #000', backgroundColor: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '5px' }}>PRESS TO START</motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="main-layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
            style={{ height: '100%', width: '100%', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', position: 'relative', zIndex: 2 }}
          >
            {(!isMobile || !activeSection) && (
              <div style={{ flex: 1, paddingLeft: isMobile ? '20px' : '8%', paddingTop: isMobile ? '60px' : '0', width: '100%' }}>
                <motion.ul variants={menuContainer} initial="hidden" animate="show" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: isMobile ? '15px' : '20px' }}>
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.id} variants={menuItemAnim} onMouseEnter={() => { setHoveredItem(item.id); if (!isMobile) playHoverSound(); }} onMouseLeave={() => setHoveredItem(null)} onClick={() => { setActiveSection(item.id); playClickSound(); }}
                      style={{
                        fontSize: isMobile ? '2.5rem' : '4rem', color: hoveredItem === item.id || activeSection === item.id ? '#050A1F' : '#FFFFFF', backgroundColor: hoveredItem === item.id || activeSection === item.id ? '#00BFFF' : 'transparent',
                        padding: isMobile ? '5px 20px' : '5px 40px', cursor: 'pointer', textTransform: 'uppercase', textShadow: hoveredItem === item.id || activeSection === item.id ? 'none' : '4px 4px 0px #000',
                        borderLeft: hoveredItem === item.id || activeSection === item.id ? '10px solid #FFFFFF' : '10px solid transparent', transition: 'all 0.1s ease-out', width: 'fit-content'
                      }}
                    >
                      {item.label}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            )}

            {activeSection && (
              <div style={{ flex: isMobile ? 1 : 1.5, height: isMobile ? '100%' : '80%', padding: isMobile ? '20px' : '0 5% 0 0', width: '100%', position: 'relative' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection} initial={{ opacity: 0, x: 50, skewX: -5 }} animate={{ opacity: 1, x: 0, skewX: 0 }} exit={{ opacity: 0, x: 20, transition: { duration: 0.2 } }} transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    style={{ backgroundColor: 'rgba(5, 10, 31, 0.85)', border: '2px solid #00BFFF', height: '100%', padding: isMobile ? '20px' : '40px', borderRadius: '10px', boxShadow: '0 0 30px rgba(0, 191, 255, 0.15)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column' }}
                  >
                    {isMobile && (
                      <button
                        onClick={() => { playClickSound(); setActiveSection(null); }}
                        style={{ alignSelf: 'flex-start', backgroundColor: '#00BFFF', color: '#050A1F', border: 'none', padding: '5px 15px', fontWeight: 'bold', marginBottom: '15px', cursor: 'pointer', transform: 'skewX(-10deg)', textTransform: 'uppercase', boxShadow: '2px 2px 0px rgba(0,0,0,0.5)' }}
                      >
                        ◄ BACK TO MENU
                      </button>
                    )}
                    <h2 style={{ fontSize: isMobile ? '2rem' : '3rem', color: '#00BFFF', textTransform: 'uppercase', borderBottom: '2px solid #00BFFF', paddingBottom: '10px', marginBottom: '20px', textShadow: '2px 2px 0px #000' }}>
                      {activeSection}
                    </h2>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      {renderContent()}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;