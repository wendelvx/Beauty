export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-offwhite">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105 brightness-[0.85] contrast-[1.1]" // Escurece o vídeo levemente e aumenta o contraste
        >
          <source src="/hero-video.webm" type="video/webm" />
        </video>

        {/* 1. OVERLAY GRADIENTE RADIAL (O segredo do contraste) */}
        {/* Este gradiente é mais escuro no centro (onde está o texto) e suaviza para as bordas */}
        <div className="absolute inset-0 bg-radial-[at_center] from-black/40 via-black/20 to-transparent z-1" />
        
        {/* 2. OVERLAY DE COR (Toque de marca) */}
        <div className="absolute inset-0 bg-offwhite/10 mix-blend-overlay z-2" />
      </div>

      {/* Conteúdo Centralizado */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="font-sans text-gold uppercase tracking-[0.3em] text-sm mb-4 block animate-fade-in drop-shadow-md">
          Estética Avançada & Massoterapia
        </span>
        
        {/* 3. SOMBRA NO TEXTO (drop-shadow) */}
        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          A Ciência do <span className="italic">Bem-Estar</span>
        </h1>
        
        <p className="font-sans text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
          Resultados que você sente, cuidado que você merece. Em Juazeiro do Norte, 
          uma experiência exclusiva unindo técnica científica e luxo.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-gold text-white px-10 py-4 rounded-full font-sans font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl border border-gold/50">
            Agendar Avaliação Personalizada
          </button>
        </div>
      </div>
    </section>
  );
}