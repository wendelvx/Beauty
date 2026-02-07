import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToAssessment = () => {
    const element = document.getElementById('avaliacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-offwhite">
      
      {/* 1. BACKGROUND LAYER (Otimizado para Contraste) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 brightness-[0.70] contrast-[1.1]"
        >
          <source src="/hero-video.webm" type="video/webm" />
        </video>

        {/* Gradiente Radial: Foco de luz central para destacar o texto */}
        <div className="absolute inset-0 bg-radial-[at_center] from-black/60 via-black/20 to-transparent z-1" />
        
        {/* Overlay de Textura: Suaviza a transição do vídeo */}
        <div className="absolute inset-0 bg-aesthetic-gray/10 mix-blend-overlay z-2" />
      </div>

      {/* 2. CONTENT LAYER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // Ease customizado para fluidez
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        
        {/* ETIQUETA DE MARCA (Tag de Luxo) */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="mb-8"
        >
          <span className="font-sans text-gold uppercase text-xs md:text-sm font-bold drop-shadow-lg inline-block border-b border-gold/30 pb-2">
            Estética Avançada & Massoterapia
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL (H1 imponente) */}
        <h1 className="font-serif text-5xl md:text-8xl text-white leading-[1.1] mb-8 drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
          A Ciência do <br />
          <span className="italic font-light text-white/95">Bem-Estar</span>
        </h1>

        {/* DESCRIÇÃO (Focada em exclusividade) */}
        <p className="font-sans text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium tracking-wide">
          Resultados que você sente, cuidado que você merece. Em Juazeiro do Norte,
          uma experiência exclusiva unindo técnica científica e luxo.
        </p>

        {/* CTA (Chamada para Ação) */}
        <div className="flex justify-center items-center">
          <motion.button 
            onClick={scrollToAssessment}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(212,175,55,1)",
              boxShadow: "0 20px 40px rgba(212,175,55,0.2)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold text-white px-14 py-5 rounded-full font-sans font-bold text-sm uppercase tracking-[0.2em] transition-all border border-gold/50 cursor-pointer"
          >
            Iniciar Jornada
          </motion.button>
        </div>
      </motion.div>

      {/* INDICADOR DE SCROLL (Minimalista) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 15, 0] }}
        transition={{ delay: 2, duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-gold/50 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>

    </section>
  );
}