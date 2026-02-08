import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Lenis from '@studio-freight/lenis'; // Recomendado: npm install @studio-freight/lenis

// Componentes
import Navbar from './components/Navbar';
import WhatsAppBtn from './components/WhatsAppBtn';
import KittyBow from './components/KittyBow';

// Seções
import Hero from './sections/Hero';
import Authority from './sections/Authority';
import Services from './sections/Services';
import About from './sections/About';
import PreAssessment from './sections/PreAssessment';
import Footer from './sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  // 1. ROLAGEM SUAVE (LENIS)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing de suavidade premium
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Desativado em touch para manter a performance nativa mobile
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Limpeza ao desmontar
    return () => lenis.destroy();
  }, []);

  // 2. OTIMIZAÇÃO DE PRE-LOADING
  useEffect(() => {
    // Em vez de apenas um timer, garantimos que o scroll volte ao topo no reload
    window.scrollTo(0, 0);

    // Podemos esperar o carregamento total da página (imagens/vídeos críticos)
    const handleLoad = () => {
      // Pequeno delay após o load real para garantir a transição de saída da Splash
      setTimeout(() => setLoading(false), 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // 3. BARRA DE PROGRESSO
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-offwhite selection:bg-primary/30 selection:text-accent antialiased overflow-x-hidden">
      
      {/* BARRA DE PROGRESSO (PRECISÃO CLÍNICA) */}
      {!loading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[70] origin-left"
          style={{ scaleX }}
        />
      )}

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: '-100%', 
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-accent"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-8"
              >
                <KittyBow className="w-20 h-20 text-primary" />
              </motion.div>
              
              <div className="flex flex-col items-center">
                <h2 className="font-sans text-3xl font-bold text-white tracking-tighter leading-none mb-1">
                  YOUR
                </h2>
                <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-primary">
                  BEAUTY
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />

            <div id="home"><Hero /></div>
            <section id="autoridade"><Authority /></section>
            <section id="servicos"><Services /></section>
            <section id="sobre"><About /></section>
            <section id="agendamento"><PreAssessment /></section>
            
            <Footer />
            <WhatsAppBtn />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;