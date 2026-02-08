import { useState } from 'react';
import { Send, ClipboardCheck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PreAssessment() {
  const [formData, setFormData] = useState({
    nome: '',
    objetivo: 'Recuperação de Performance',
    dor: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mensagem = `Olá Gislayne!%0A%0A*PROTOCOLO DE PRÉ-AVALIAÇÃO*%0A%0A*Nome:* ${formData.nome}%0A*Foco do Tratamento:* ${formData.objetivo}%0A*Descrição da Queixa:* ${formData.dor}%0A%0AGostaria de agendar minha avaliação clínica para iniciar o tratamento.`;
    
    const url = `https://wa.me/558888145310?text=${mensagem}`; 
    window.open(url, '_blank');
  };

  return (
    <section id="agendamento" className="py-16 md:py-24 bg-offwhite overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} // Reduzido deslocamento para fluidez vertical
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-accent/5 border border-accent/5 relative"
        >
          {/* Badge de Segurança Clínica - Ajuste de largura para mobile */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg whitespace-nowrap">
            <ShieldCheck size={12} className="text-primary" />
            <span className="text-[8px] md:text-[9px] uppercase font-bold tracking-[0.2em]">Ambiente Seguro & Sigiloso</span>
          </div>

          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl text-primary mb-6">
              <ClipboardCheck size={28} />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-accent mb-4 leading-tight">
              Protocolo de <span className="italic text-primary font-light">Pré-Avaliação</span>
            </h2>
            <p className="font-sans text-accent/60 max-w-md mx-auto text-xs md:text-sm leading-relaxed">
              Para um atendimento de precisão, preciso entender como seu corpo se manifesta. 
              Preencha os dados abaixo para darmos início à sua análise funcional.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              
              {/* Campo Nome */}
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-accent font-bold ml-2 md:ml-4">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  placeholder="Seu nome" // Placeholder encurtado no mobile para não espremer
                  className="w-full px-5 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-offwhite border border-transparent focus:border-primary/30 focus:bg-white transition-all outline-none text-accent placeholder:text-accent/30 text-sm md:text-base font-medium"
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>

              {/* Campo Objetivo Técnico */}
              <div className="space-y-2">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-accent font-bold ml-2 md:ml-4">Objetivo Principal</label>
                <div className="relative">
                  <select 
                    className="w-full px-5 md:px-8 py-4 md:py-5 rounded-xl md:rounded-2xl bg-offwhite border border-transparent focus:border-primary/30 focus:bg-white transition-all outline-none text-accent appearance-none cursor-pointer text-sm md:text-base font-medium pr-12"
                    onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                  >
                    <option value="Performance e Recovery">Performance & Recovery</option>
                    <option value="Tratamento de Dor Crônica">Tratamento de Dor Crônica</option>
                    <option value="Gestão de Estresse e Tensão">Gestão de Estresse & Tensão</option>
                    <option value="Estética Funcional">Estética Funcional</option>
                  </select>
                  <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                    <Send size={12} className="rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            {/* Campo de Queixa Detalhada */}
            <div className="space-y-2">
              <label className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-accent font-bold ml-2 md:ml-4">Descrição da Queixa ou Limitação</label>
              <textarea 
                rows="4"
                placeholder="Ex: Sinto peso nos ombros ou dor aguda ao treinar..."
                className="w-full px-5 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-offwhite border border-transparent focus:border-primary/30 focus:bg-white transition-all outline-none text-accent placeholder:text-accent/30 text-sm md:text-base font-medium resize-none"
                onChange={(e) => setFormData({...formData, dor: e.target.value})}
              />
            </div>

            {/* Botão de Envio */}
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent text-white py-5 md:py-6 rounded-xl md:rounded-2xl font-sans font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-3 shadow-xl shadow-accent/10 hover:bg-primary"
            >
              Solicitar Análise e Agendamento
              <Send className="w-4 h-4" />
            </motion.button>
          </form>

        </motion.div>
      </div>
    </section>
  );
}