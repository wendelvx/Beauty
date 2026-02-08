import { Activity, Target, Zap, ChevronRight, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Terapia Manual Avançada",
      benefit: "Alívio imediato e libertação",
      description: "Protocolos manuais profundos para desativar o ciclo do estresse. Foco em cefaleias tensionais e rigidez cervical.",
      icon: <Wind className="w-6 h-6" />,
      cta: "Recuperar conforto"
    },
    {
      title: "Liberação Instrumental (MITM)",
      benefit: "Precisão cirúrgica tecidual",
      description: "Uso de raspadores e ventosas para tratar aderências que impedem o movimento. Tecnologia aplicada ao toque.",
      icon: <Target className="w-6 h-6" />,
      cta: "Eliminar restrições"
    },
    {
      title: "Recovery & Performance",
      benefit: "Aceleração de resultados",
      description: "Dry Needling e ventosaterapia para quem treina e busca reduzir o tempo de recuperação pós-esforço.",
      icon: <Activity className="w-6 h-6" />,
      cta: "Voltar ao treino"
    },
    {
      title: "Estética Científica",
      benefit: "Saúde e funcionalidade dérmica",
      description: "Tratamentos faciais e corporais personalizados que unem o peso acadêmico à tecnologia estética.",
      icon: <Zap className="w-6 h-6" />,
      cta: "Avaliar minha pele"
    }
  ];

  // Estabilização: Opacidade 1 remove qualquer "pisca" durante o carregamento
  const containerVariants = {
    hidden: { opacity: 1 }, 
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.02 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 1, y: 0 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] } 
    }
  };

  const scrollToAssessment = () => {
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho Técnico - Estabilizado para evitar vácuo visual */}
        <motion.div 
          initial={{ opacity: 1, y: 0 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center text-center mb-12 md:mb-20"
        >
          <span className="font-sans text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
            Especialidades Terapêuticas
          </span>
          
          <h2 className="font-serif text-3xl md:text-5xl text-accent mb-6 leading-tight">
            Soluções para um <span className="italic text-primary">corpo em alta performance</span>
          </h2>
          <p className="font-sans text-accent/70 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Dor não é normal. Nossos tratamentos são desenhados para devolver a mobilidade 
            e o bem-estar que o seu estilo de vida exige.
          </p>
        </motion.div>

        {/* Grade de Serviços - Renderização Firme e Instantânea */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-accent/5 shadow-sm transition-all duration-500 flex flex-col h-full"
            >
              <div className="bg-offwhite w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-primary mb-6 md:mb-8 shadow-inner">
                {service.icon}
              </div>
              
              <h3 className="font-serif text-xl text-accent mb-2 tracking-tight">
                {service.title}
              </h3>
              
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-primary mb-6 block border-l-2 border-primary/20 pl-3">
                {service.benefit}
              </span>
              
              <p className="font-sans text-sm text-accent/60 leading-relaxed flex-grow">
                {service.description}
              </p>

              <button 
                onClick={scrollToAssessment}
                className="mt-8 md:mt-10 flex items-center justify-between w-full p-4 rounded-xl border border-accent/5 bg-offwhite/50 text-accent font-sans text-[10px] font-bold uppercase tracking-widest active:bg-accent active:text-white transition-all duration-300"
              >
                {service.cta}
                <ChevronRight size={14} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota Técnica - Mantida estável com opacidade de leitura */}
        <motion.p 
          initial={{ opacity: 0.5 }} 
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 font-sans text-[9px] uppercase tracking-[0.3em] text-accent px-4"
        >
          *Todos os procedimentos são precedidos por avaliação clínica rigorosa.
        </motion.p>
      </div>
    </section>
  );
}