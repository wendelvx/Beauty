import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import KittyBow from './KittyBow';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Dados para o WhatsApp
  const phoneNumber = "558888145310";
  const message = encodeURIComponent("Olá Gislayne! Gostaria de agendar uma avaliação na Your Beauty.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const navLinks = [
    { name: 'Especialidades', href: '#procedimentos' },
    { name: 'A Especialista', href: '#sobre' },
    { name: 'Localização', href: '#localizacao' },
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Função para abrir o WhatsApp
  const handleWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-offwhite/80 backdrop-blur-lg border-b border-quartz/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={(e) => handleScroll(e, '#home')}>
          <KittyBow className="w-8 h-8 text-gold transition-transform duration-500 group-hover:rotate-12" />
          <span className="text-xl font-serif font-bold text-aesthetic-gray tracking-tight">
            Your <span className="text-gold italic">Beauty</span>
          </span>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="font-sans text-[10px] uppercase tracking-[0.25em] text-aesthetic-gray/70 hover:text-gold transition-colors font-bold"
            >
              {link.name}
            </a>
          ))}
          
          {/* Botão de Agendamento Desktop */}
          <button 
            onClick={handleWhatsApp}
            className="bg-gold text-white px-8 py-3 rounded-full font-sans text-[10px] uppercase font-bold tracking-widest hover:bg-gold/90 transition-all shadow-lg shadow-gold/20 cursor-pointer"
          >
            Agendar
          </button>
        </div>

        {/* BOTÃO MOBILE (Hambúrguer + Agendar Rápido) */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={handleWhatsApp}
            className="bg-gold text-white px-4 py-2 rounded-full font-sans text-[10px] uppercase font-bold tracking-widest cursor-pointer"
          >
            Agendar
          </button>
          <button 
            className="text-gold cursor-pointer"
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
            className="absolute top-20 left-0 w-full bg-white border-b border-quartz/20 shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6 items-center text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)}
                  className="font-serif text-2xl text-aesthetic-gray hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="w-12 h-0.5 bg-quartz/30 my-2" />
              
              {/* Botão de Agendamento dentro do Menu Mobile */}
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-gold text-white py-4 rounded-full font-sans font-bold uppercase tracking-widest text-xs shadow-lg"
              >
                Falar no WhatsApp
              </button>

              <KittyBow className="w-10 h-10 text-gold opacity-30 mt-4" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/50 font-bold">
                By Gislayne
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}