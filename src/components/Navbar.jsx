import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import KittyBow from './KittyBow';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Dados para o WhatsApp - Tom Profissional e Resolutivo
  const phoneNumber = "558888145310";
  const message = encodeURIComponent("Olá Gislayne! Gostaria de agendar uma avaliação terapêutica para recuperar minha performance corporal.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Links reordenados para seguir a jornada de consciência do paciente
  const navLinks = [
    { name: 'Ciência Aplicada', href: '#autoridade' }, 
    { name: 'Tratamentos', href: '#servicos' },
    { name: 'A Especialista', href: '#sobre' },
    { name: 'Avaliação Clínica', href: '#agendamento' }, 
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Compensação da altura da navbar fixa
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-offwhite/95 backdrop-blur-md border-b border-accent/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO - Combinação de Identidade e Performance */}
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={(e) => handleScroll(e, '#home')}
        >
          <div className="relative shrink-0">
            <KittyBow className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-12" />
          </div>

          <div className="flex flex-col leading-tight">
            {/* O estilo exato que você solicitou */}
            <span className="text-xl font-serif font-bold text-accent tracking-tighter leading-none">
              Your <span className="text-primary italic">Beauty</span>
            </span>
            {/* Tagline de reforço técnico para Autoridade Clínica */}
            <span className="text-[8px] uppercase tracking-[0.4em] text-accent/60 font-bold ml-1 mt-1">
              Terapia & Performance
            </span>
          </div>
        </div>

        {/* LINKS DESKTOP - Vocabulário Técnico e Atraente */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent/70 hover:text-primary transition-colors font-bold"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-accent text-white px-8 py-3 rounded-full font-sans text-[10px] uppercase font-bold tracking-widest hover:bg-primary transition-all shadow-lg shadow-accent/10 active:scale-95 cursor-pointer"
          >
            Agendar Consulta
          </button>
        </div>

        {/* MOBILE - Acesso Rápido */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-accent text-white px-5 py-2.5 rounded-full font-sans text-[10px] uppercase font-bold tracking-widest"
          >
            Agendar
          </button>
          <button 
            className="text-accent p-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-accent/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-10 space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)}
                  className="font-serif text-2xl text-accent hover:text-primary transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 text-primary">→</span>
                </a>
              ))}
              <button 
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full bg-accent text-white py-5 rounded-2xl font-sans font-bold uppercase tracking-widest text-xs shadow-lg"
              >
                Solicitar Avaliação Clínica
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}