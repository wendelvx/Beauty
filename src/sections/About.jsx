import { motion } from 'framer-motion';
import { Zap, Activity } from 'lucide-react';
import KittyBow from '../components/KittyBow';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* LADO DA IMAGEM: A PRESENÇA DA ESPECIALISTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-b-8 border-r-8 border-primary/20">
              <img 
                src="/images/ges-profile.webp" 
                alt="Gislayne - Especialista em Performance Corporal"
                className="w-full h-[550px] lg:h-[700px] object-cover object-right grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              />
              
              {/* TOQUE PESSOAL: O Laço da Kitty no canto superior esquerdo */}
              <motion.div 
                initial={{ rotate: -15, scale: 0 }}
                whileInView={{ rotate: -10, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="absolute top-8 left-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl group cursor-help"
              >
                <KittyBow className="w-10 h-10 text-primary transition-transform duration-500 group-hover:rotate-12" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-white" />
              </motion.div>
            </div>

            {/* Elemento Flutuante: Especialidades Técnicas */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-accent/5 hidden md:block"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-accent">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-tight">Liberação Instrumental (MITM)</span>
                </div>
                <div className="flex items-center gap-3 text-accent border-t border-accent/5 pt-3">
                  <Activity className="w-5 h-5 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-tight">Reabilitação de Tecidos Moles</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* LADO DO TEXTO */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em]">A Especialista</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl text-accent mb-8 leading-[1.1]">
              Eu não trato apenas sintomas. <br />
              <span className="italic text-primary font-light">Eu reabilito movimentos.</span>
            </h2>

            <div className="space-y-6 text-accent/80 text-lg leading-relaxed">
              <p className="font-medium text-accent">
                Entendo o corpo humano como uma <span className="text-primary italic">arquitetura biológica de alta precisão.</span> 
              </p>
              
              <p>
                Minha missão em Juazeiro do Norte é elevar o padrão do cuidado corporal. Enquanto o mercado foca em relaxamentos superficiais, eu aplico o rigor da <strong>ciência manual e instrumental</strong> para desativar dores crônicas e restaurar a funcionalidade total dos seus músculos.
              </p>

              <p>
                Utilizo o método <span className="text-accent font-bold">MITM</span> para atingir camadas teciduais que o toque comum não alcança. É a união entre o conhecimento acadêmico sólido e a tecnologia aplicada ao toque.
              </p>

              <div className="bg-offwhite p-8 rounded-[2rem] border-l-4 border-accent relative overflow-hidden group">
                <p className="font-serif text-xl text-accent leading-snug relative z-10 italic">
                  "Meu compromisso é com o resultado que você sente ao sair da maca: um corpo mais leve, funcional e livre de amarras."
                </p>
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform">
                   <KittyBow className="w-20 h-20 text-accent" />
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-serif text-4xl text-accent leading-none">Gislayne</span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold mt-2">Expert em Terapias de Performance</span>
              </div>
              <button 
                onClick={() => document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent text-white px-8 py-4 rounded-2xl font-sans text-[10px] uppercase font-bold tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95 cursor-pointer"
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