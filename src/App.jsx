import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

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

  // Lógica para a Barra de Progresso de Scroll
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Simulação de carregamento para impacto visual e preparo de assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-offwhite selection:bg-primary/30 selection:text-accent antialiased overflow-x-hidden">
      
      {/* BARRA DE PROGRESSO DE SCROLL (CONCEITO: PRECISÃO CLÍNICA) */}
      {!loading && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[60] origin-left"
          style={{ scaleX }}
        />
      )}

      <AnimatePresence mode="wait">
        {loading ? (
          /* TELA DE LOADING (SPLASH SCREEN DE ALTO IMPACTO) */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: -1000, 
              opacity: 0, 
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
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8"
              >
                <KittyBow className="w-24 h-24 text-primary" />
              </motion.div>
              
              <div className="flex flex-col items-center text-center">
                <h2 className="font-sans text-4xl font-bold text-white tracking-tighter leading-none mb-1">
                  YOUR
                </h2>
                <span className="font-sans text-xs uppercase tracking-[0.6em] text-primary font-medium">
                  BEAUTY
                </span>
              </div>
              
              <div className="h-[1px] bg-white/10 mt-12 w-40 relative overflow-hidden rounded-full">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>

              {/* Tagline de Autoridade no Loading */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 font-sans text-[9px] uppercase tracking-[0.4em] text-white/50"
              >
                Ciência Aplicada ao Movimento
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          /* CONTEÚDO PRINCIPAL COM REVELAÇÃO SUAVE */
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Navbar />

            {/* Seções com ID para ancoragem de scroll */}
            <div id="home">
              <Hero />
            </div>

            <section id="autoridade">
              <Authority />
            </section>

            <section id="servicos">
              <Services />
            </section>

            <section id="sobre">
              <About />
            </section>

            <section id="agendamento">
              <PreAssessment />
            </section>

            <Footer />

            <WhatsAppBtn />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;