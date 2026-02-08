import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppBtn() {
  const phoneNumber = "558888145310";
  
  // MENSAGEM ATIVA: Migramos de "tirar dúvidas" para um desejo de resultado (Performance/Alívio)
  const defaultMessage = encodeURIComponent(
    "Olá Gislayne! Gostaria de uma avaliação clínica para recuperar minha performance corporal e eliminar tensões."
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a 
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="relative group flex items-center justify-center"
      >
        {/* Onda de choque (Anel pulsante - Verde WhatsApp mantido pela funcionalidade) */}
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0, 0.3] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-[#25D366] rounded-full"
        />

        {/* Botão Principal */}
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_15px_35px_rgba(37,211,102,0.3)] transition-transform duration-300 group-hover:scale-110 active:scale-95">
          <MessageCircle className="w-8 h-8 drop-shadow-md" />
        </div>

        {/* Tooltip Lateral: Alinhado ao Tom "Autoridade Acolhedora" */}
        <span className="absolute right-full mr-5 bg-white text-accent text-[10px] uppercase font-bold tracking-[0.25em] px-6 py-3 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-accent/5">
          Agendar Avaliação Clínica
          {/* Seta do Tooltip */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-accent/5" />
        </span>
      </a>
    </motion.div>
  );
}