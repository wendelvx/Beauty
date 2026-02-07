import { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PreAssessment() {
  const [formData, setFormData] = useState({
    nome: '',
    objetivo: 'Estética',
    dor: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formatação da mensagem para o WhatsApp
    const mensagem = `Olá Gislayne! Me chamo ${formData.nome}.%0A%0AGostaria de uma avaliação personalizada.%0A%0A*Meu objetivo:* ${formData.objetivo}%0A*Minha queixa principal:* ${formData.dor}`;
    
    // Link configurado com o seu número: 55 (Brasil) + 88 (DDD) + 88145310
    const url = `https://wa.me/558888145310?text=${mensagem}`; 
    
    window.open(url, '_blank');
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    /* ID "avaliacao" mantido para os botões de scroll funcionarem */
    <section id="avaliacao" className="py-24 bg-quartz/10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-6 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-white"
      >
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-serif text-3xl md:text-4xl text-aesthetic-gray mb-4"
          >
            Sua jornada de <span className="italic text-gold">transformação</span> começa aqui
          </motion.h2>
          <p className="font-sans text-sm text-aesthetic-gray/60 italic">
            Preencha os dados abaixo para uma pré-análise da sua necessidade.
          </p>
        </div>

        <motion.form 
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          {/* Campo Nome */}
          <motion.div variants={inputVariants} className="group">
            <label className="block text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2 ml-4">Seu Nome</label>
            <input 
              required
              type="text" 
              placeholder="Como quer ser chamada?"
              className="w-full px-8 py-5 rounded-full bg-offwhite border border-transparent focus:border-gold/20 focus:bg-white focus:ring-4 focus:ring-gold/5 transition-all outline-none text-aesthetic-gray placeholder:text-aesthetic-gray/30"
              onChange={(e) => setFormData({...formData, nome: e.target.value})}
            />
          </motion.div>

          {/* Grid de Objetivo e Queixa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={inputVariants} className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2 ml-4">Objetivo</label>
              <div className="relative">
                <select 
                  className="w-full px-8 py-5 rounded-full bg-offwhite border border-transparent focus:border-gold/20 focus:bg-white focus:ring-4 focus:ring-gold/5 transition-all outline-none text-aesthetic-gray appearance-none cursor-pointer"
                  onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                >
                  <option value="Estética">Estética (Corpo/Rosto)</option>
                  <option value="Alívio de Dores">Alívio de Dores</option>
                  <option value="Performance">Performance/Recuperação</option>
                  <option value="Relaxamento">Relaxamento Total</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gold/50 text-xs">
                  ▼
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={inputVariants} className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-2 ml-4">Principal Queixa</label>
              <input 
                type="text" 
                placeholder="Ex: Dor nas costas, retenção..."
                className="w-full px-8 py-5 rounded-full bg-offwhite border border-transparent focus:border-gold/20 focus:bg-white focus:ring-4 focus:ring-gold/5 transition-all outline-none text-aesthetic-gray placeholder:text-aesthetic-gray/30"
                onChange={(e) => setFormData({...formData, dor: e.target.value})}
              />
            </motion.div>
          </div>

          {/* Botão de Envio */}
          <motion.button 
            variants={inputVariants}
            whileHover={{ scale: 1.02, backgroundColor: '#C4A02F' }} 
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gold text-white py-6 rounded-full font-sans font-bold uppercase tracking-[0.25em] text-xs transition-all flex items-center justify-center gap-3 shadow-xl shadow-gold/20"
          >
            Enviar para Especialista <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}