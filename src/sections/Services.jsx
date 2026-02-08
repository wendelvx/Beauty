import { Sparkles, Activity, Target, Zap, ChevronRight, Wind } from 'lucide-react';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const scrollToAssessment = () => {
    // Apontando para #agendamento conforme definido no App.jsx
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho Técnico */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="font-sans text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
            Especialidades Terapêuticas
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl text-accent mb-6">
            Soluções para um <span className="italic text-primary">corpo em alta performance</span>
          </h2>
          <p className="font-sans text-accent/70 max-w-2xl mx-auto leading-relaxed">
            Dor não é normal. Nossos tratamentos são desenhados para devolver a mobilidade 
            e o bem-estar que o seu estilo de vida exige.
          </p>
        </motion.div>

        {/* Grade de Serviços */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group bg-white p-10 rounded-[2.5rem] border border-accent/5 shadow-sm hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col h-full"
            >
              <div className="bg-offwhite w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
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
                className="mt-10 flex items-center justify-between w-full p-4 rounded-xl border border-accent/5 bg-offwhite/50 text-accent font-sans text-[10px] font-bold uppercase tracking-widest group-hover:bg-accent group-hover:text-white transition-all duration-300 cursor-pointer"
              >
                {service.cta}
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Nota Técnica de Rodapé da Seção */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          className="text-center mt-16 font-sans text-[9px] uppercase tracking-[0.3em] text-accent"
        >
          *Todos os procedimentos são precedidos por avaliação clínica rigorosa.
        </motion.p>
      </div>
    </section>
  );
}