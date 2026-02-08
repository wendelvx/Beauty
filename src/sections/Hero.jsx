import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToServices = () => {
    // Apontando para #servicos para ele ver a solução logo após a dor
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-offwhite">
      
      {/* 1. BACKGROUND LAYER - Mantendo o vídeo mas com overlay mais técnico */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 brightness-[0.6] contrast-[1.1]"
        >
          <source src="/hero-video.webm" type="video/webm" />
        </video>

        {/* Gradiente para garantir leitura do texto branco */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-accent/20 to-accent/60 z-1" />
      </div>

      {/* 2. CONTENT LAYER */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        
        {/* TAG DE AUTORIDADE - Mudando de "Estética" para "Performance/Recuperação" */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <span className="font-sans text-primary uppercase text-[10px] md:text-xs font-bold tracking-[0.4em] inline-block border-b border-primary/40 pb-2">
            Terapia Manual & Performance Corporal
          </span>
        </motion.div>

        {/* TÍTULO PRINCIPAL - Focado no Benefício Final (Libertação) */}
        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 drop-shadow-2xl">
          Sinta a liberdade de <br />
          <span className="italic font-light text-primary">um corpo sem tensões</span>
        </h1>

        {/* DESCRIÇÃO - Agitando a Dor e trazendo a Solução Científica */}
        <p className="font-sans text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-medium tracking-wide">
          O corpo pesado, rígido e o ciclo do estresse não precisam ser sua rotina. 
          Recupere sua <span className="text-primary">funcionalidade e conforto</span> através de 
          técnicas científicas de liberação tecidual e reabilitação.
        </p>

        {/* CTA - Focado em Avaliação (Ação de Especialista) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <motion.button 
            onClick={scrollToServices}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-10 py-4 rounded-full font-sans font-bold text-[11px] uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/20 cursor-pointer"
          >
            Conhecer o Método
          </motion.button>
          
          <motion.button 
            onClick={() => window.open('https://wa.me/558888145310', '_blank')}
            className="bg-transparent text-white border border-white/30 backdrop-blur-sm px-10 py-4 rounded-full font-sans font-bold text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-accent transition-all cursor-pointer"
          >
            Agendar Avaliação
          </motion.button>
        </div>
      </motion.div>

      {/* INDICADOR DE SCROLL */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>

    </section>
  );
}