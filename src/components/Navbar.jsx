import { useState } from 'react';
import { Menu, X, Microscope, Stethoscope } from 'lucide-react'; // Ícones que remetem à ciência se preferir trocar o laço em pontos específicos
import { motion, AnimatePresence } from 'framer-motion';
import KittyBow from './KittyBow';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Dados para o WhatsApp - Texto mais profissional
  const phoneNumber = "558888145310";
  const message = encodeURIComponent("Olá Gislayne! Gostaria de agendar uma avaliação terapêutica para recuperar minha performance corporal.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Links alinhados aos IDs do App.jsx e ao tom de autoridade
  const navLinks = [
    { name: 'Tratamentos', href: '#servicos' },
    { name: 'Ciência Aplicada', href: '#autoridade' }, // Antigo "Especialidades"
    { name: 'A Especialista', href: '#sobre' },
    { name: 'O Consultório', href: '#agendamento' }, // Focado no destino final
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // altura da navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-offwhite/90 backdrop-blur-md border-b border-accent/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO - Equilíbrio entre delicadeza e autoridade */}
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={(e) => handleScroll(e, '#home')}
        >
          <div className="relative">
            <KittyBow className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-12" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-accent tracking-tighter leading-none">
              Your <span className="text-primary italic">Beauty</span>
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-accent/60 font-bold">
              Terapia & Performance
            </span>
          </div>
        </div>

        {/* LINKS DESKTOP - Menu mais limpo e técnico */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent/70 hover:text-primary transition-colors font-semibold"
            >
              {link.name}
            </a>
          ))}
          
          {/* CTA de Autoridade */}
          <button 
            onClick={handleWhatsApp}
            className="bg-accent text-white px-7 py-2.5 rounded-full font-sans text-[10px] uppercase font-bold tracking-widest hover:bg-primary transition-all shadow-md shadow-accent/10 active:scale-95 cursor-pointer"
          >
            Agendar Avaliação
          </button>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={handleWhatsApp}
            className="bg-accent text-white px-4 py-2 rounded-full font-sans text-[10px] uppercase font-bold tracking-widest"
          >
            Agendar
          </button>
          <button 
            className="text-accent cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-accent/10 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => handleScroll(e, link.href)}
                  className="font-serif text-xl text-accent hover:text-primary transition-colors border-l-2 border-transparent hover:border-primary pl-4"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-accent text-white py-4 rounded-xl font-sans font-bold uppercase tracking-widest text-xs"
              >
                Solicitar Consulta Terapêutica
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}