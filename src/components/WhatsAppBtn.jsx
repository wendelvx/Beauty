import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppBtn() {
  const phoneNumber = "558888145310";
  const defaultMessage = encodeURIComponent("Olá Gislayne! Vi seu site e gostaria de tirar algumas dúvidas sobre os procedimentos.");

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
        {/* Onda de choque (Anel pulsante de fundo) */}
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
        <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 group-hover:scale-110 active:scale-95">
          <MessageCircle className="w-8 h-8 drop-shadow-md" />
        </div>

        {/* Tooltip Lateral (Inspirado no estilo Your Beauty) */}
        <span className="absolute right-full mr-5 bg-white text-aesthetic-gray text-[10px] uppercase font-bold tracking-widest px-5 py-3 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-quartz/10">
          Agendar no WhatsApp
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-r border-t border-quartz/10" />
        </span>
      </a>
    </motion.div>
  );
}