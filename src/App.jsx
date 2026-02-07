import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Simula o carregamento dos assets (vídeos/imagens) para garantir o impacto visual
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5s é o tempo perfeito para a animação da logo

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-offwhite selection:bg-quartz/60 selection:text-gold antialiased overflow-x-hidden">
      
      <AnimatePresence mode="wait">
        {loading ? (
          /* TELA DE LOADING (SPLASH SCREEN) */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* O Laço pulsando suavemente no centro */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                <KittyBow className="w-20 h-20 text-gold" />
              </motion.div>
              
              {/* Nome da Marca com espaçamento elegante */}
              <h2 className="font-serif text-2xl text-aesthetic-gray tracking-[0.3em] uppercase">
                Your <span className="text-gold italic">Beauty</span>
              </h2>
              
              {/* Barra de progresso sutil */}
              <motion.div 
                className="h-[1px] bg-gold/30 mt-8 w-32 relative overflow-hidden rounded-full"
              >
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gold"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          /* CONTEÚDO PRINCIPAL */
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Navegação Fixa */}
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

            {/* Botão Flutuante */}
            <WhatsAppBtn />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;