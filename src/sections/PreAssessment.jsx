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
    <section id="agendamento" className="py-24 bg-offwhite overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 rounded-[3.5rem] shadow-2xl shadow-accent/5 border border-accent/5 relative"
        >
          {/* Badge de Segurança Clínica */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <ShieldCheck size={14} className="text-primary" />
            <span className="text-[9px] uppercase font-bold tracking-[0.2em]">Ambiente Seguro & Sigiloso</span>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-6">
              <ClipboardCheck size={32} />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-accent mb-4">
              Protocolo de <span className="italic text-primary font-light">Pré-Avaliação</span>
            </h2>
            <p className="font-sans text-accent/60 max-w-md mx-auto text-sm leading-relaxed">
              Para um atendimento de precisão, preciso entender como seu corpo se manifesta. 
              Preencha os dados abaixo para darmos início à sua análise funcional.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Campo Nome */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold ml-4">Nome Completo</label>
                <input 
                  required
                  type="text" 
                  placeholder="Como gostaria de ser chamada?"
                  className="w-full px-8 py-5 rounded-2xl bg-offwhite border border-transparent focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-accent placeholder:text-accent/30 font-medium"
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                />
              </div>

              {/* Campo Objetivo Técnico */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold ml-4">Objetivo Principal</label>
                <div className="relative">
                  <select 
                    className="w-full px-8 py-5 rounded-2xl bg-offwhite border border-transparent focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-accent appearance-none cursor-pointer font-medium"
                    onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                  >
                    <option value="Performance e Recovery">Recuperação de Performance (Treino)</option>
                    <option value="Tratamento de Dor Crônica">Tratamento de Dor Crônica</option>
                    <option value="Gestão de Estresse e Tensão">Gestão de Estresse & Tensão</option>
                    <option value="Estética Funcional">Estética Funcional & Contorno</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>
            </div>

            {/* Campo de Queixa Detalhada */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold ml-4">Descrição da Queixa ou Limitação</label>
              <textarea 
                rows="3"
                placeholder="Ex: Sinto um peso nos ombros ao final do dia / Dor aguda ao treinar pernas..."
                className="w-full px-8 py-5 rounded-3xl bg-offwhite border border-transparent focus:border-primary/30 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none text-accent placeholder:text-accent/30 font-medium resize-none"
                onChange={(e) => setFormData({...formData, dor: e.target.value})}
              />
            </div>

            {/* Botão de Envio com Autoridade */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent text-white py-6 rounded-2xl font-sans font-bold uppercase tracking-[0.3em] text-[10px] transition-all flex items-center justify-center gap-4 shadow-2xl shadow-accent/20 hover:bg-primary cursor-pointer"
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