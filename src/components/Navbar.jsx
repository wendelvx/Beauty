import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-offwhite/80 backdrop-blur-md border-b border-quartz/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo/Nome com a fonte Serifada */}
        <div className="text-2xl font-serif font-bold text-gold tracking-wide">
          Your Beauty
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex space-x-8 font-sans text-sm uppercase tracking-widest text-aesthetic-gray">
          <a href="#procedimentos" className="hover:text-gold transition-colors">Especialidades</a>
          <a href="#sobre" className="hover:text-gold transition-colors">A Especialista</a>
          <a href="#localizacao" className="hover:text-gold transition-colors">Localização</a>
        </div>

        {/* CTA Compacto */}
        <button className="bg-gold text-white px-6 py-2 rounded-full font-sans text-xs uppercase font-semibold tracking-tighter hover:bg-gold/90 transition-all shadow-md">
          Agendar Agora
        </button>
      </div>
    </nav>
  );
}