import { motion } from 'framer-motion';
import { Zap, Activity } from 'lucide-react';
import KittyBow from '../components/KittyBow';

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LADO DA IMAGEM: A PRESENÇA DA ESPECIALISTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} // Escala inicial mais próxima de 1 para evitar borrão
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }} // Trigger rápido para mobile
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-b-8 border-r-8 border-primary/20">
              <img 
                src="/images/ges-profile.webp" 
                alt="Gislayne - Especialista em Performance Corporal"
                className="w-full h-[450px] md:h-[700px] object-cover object-right grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* TOQUE PESSOAL: O Laço da Kitty */}
              <motion.div 
                initial={{ rotate: -15, scale: 0 }}
                whileInView={{ rotate: -10, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                className="absolute top-6 left-6 md:top-8 md:left-8 bg-white/80 backdrop-blur-md p-3 md:p-4 rounded-2xl border border-white/20 shadow-xl group"
              >
                <KittyBow className="w-8 h-8 md:w-10 md:h-10 text-primary transition-transform duration-500 group-hover:rotate-12" />
                <div className="absolute -bottom-1 -right-1 w-2 md:w-3 h-2 md:h-3 bg-accent rounded-full border-2 border-white" />
              </motion.div>
            </div>

            {/* Elemento Flutuante: Especialidades Técnicas (Oculto em telas muito pequenas para limpeza) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white p-5 md:p-6 rounded-3xl shadow-2xl border border-accent/5 hidden sm:block"
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3 text-accent">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-tight">Liberação Instrumental (MITM)</span>
                </div>
                <div className="flex items-center gap-3 text-accent border-t border-accent/5 pt-3">
                  <Activity className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-tight">Reabilitação de Tecidos Moles</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* LADO DO TEXTO: O EFEITO UAU */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} // Mudado de x:30 para y:20 para fluidez vertical no scroll
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">A Especialista</span>
            </div>

            <h2 className="font-serif text-3xl md:text-6xl text-accent mb-6 md:mb-8 leading-tight md:leading-[1.1]">
              Eu não trato apenas sintomas. <br className="hidden md:block" />
              <span className="italic text-primary font-light">Eu reabilito movimentos.</span>
            </h2>

            <div className="space-y-5 md:space-y-6 text-accent/80 text-base md:text-lg leading-relaxed">
              <p className="font-medium text-accent">
                Entendo o corpo humano como uma <span className="text-primary italic">arquitetura biológica de alta precisão.</span> 
              </p>
              
              <p>
                Minha missão em Juazeiro do Norte é elevar o padrão do cuidado corporal. Aplico o rigor da <strong>ciência manual e instrumental</strong> para desativar dores crônicas e restaurar a funcionalidade total dos seus músculos.
              </p>

              <p>
                Utilizo o método <span className="text-accent font-bold">MITM</span> para atingir camadas teciduais que o toque comum não alcança, unindo conhecimento acadêmico sólido à tecnologia aplicada ao toque.
              </p>

              {/* Bloco de Destaque */}
              <div className="bg-offwhite p-6 md:p-8 rounded-[2rem] border-l-4 border-accent relative overflow-hidden group shadow-sm">
                <p className="font-serif text-lg md:text-xl text-accent leading-snug relative z-10 italic">
                  "Meu compromisso é com o resultado que você sente ao sair da maca: um corpo mais leve e livre de amarras."
                </p>
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                   <KittyBow className="w-16 h-16 md:w-20 md:h-20 text-accent" />
                </div>
              </div>
            </div>

            {/* Assinatura e CTA */}
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-0">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <span className="font-serif text-3xl md:text-4xl text-accent leading-none">Gislayne</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-primary font-bold mt-2">Expert em Terapias de Performance</span>
              </div>
              <button 
                onClick={() => document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-2xl font-sans text-[10px] uppercase font-bold tracking-widest active:bg-primary transition-all shadow-lg active:scale-95"
              >
                Solicitar Avaliação
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}