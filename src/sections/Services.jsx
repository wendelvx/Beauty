import { Sparkles, Activity, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Massoterapia Avançada",
      benefit: "Alívio de tensões com base anatômica",
      description: "Protocolos manuais profundos para quem busca desligar do estresse e recuperar o vigor muscular.",
      icon: <Sparkles className="w-6 h-6" />,
      cta: "Ver disponibilidade"
    },
    {
      title: "Técnicas Instrumentais (MITM)",
      benefit: "Liberação miofascial de alta precisão",
      description: "Uso de raspadores e ventosas para tratar aderências teciduais e melhorar a mobilidade instantaneamente.",
      icon: <Target className="w-6 h-6" />,
      cta: "Como funciona?"
    },
    {
      title: "Recuperação Funcional",
      benefit: "Performance e gestão da dor",
      description: "Aplicação de Dry Needling e Kinesio Taping para acelerar a recuperação e eliminar pontos de gatilho.",
      icon: <Activity className="w-6 h-6" />,
      cta: "Voltar ao movimento"
    },
    {
      title: "Estética Facial e Corporal",
      benefit: "Protocolos exclusivos e personalizados",
      description: "Tratamentos que unem tecnologia e ciência para realçar sua beleza natural com resultados duradouros.",
      icon: <Zap className="w-6 h-6" />,
      cta: "Realçar minha beleza"
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
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  // Função para scroll suave até o formulário
  const scrollToAssessment = () => {
    const element = document.getElementById('avaliacao');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="procedimentos" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho Animado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            animate={{ 
              opacity: [0.5, 1, 0.5],
              scale: [0.9, 1.1, 0.9],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="mb-4 text-gold"
          >
            <Sparkles className="w-10 h-10 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
          </motion.div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-aesthetic-gray mb-6">
            Experiências <span className="italic text-gold">Transformadoras</span>
          </h2>
          <p className="font-sans text-aesthetic-gray/70 max-w-2xl mx-auto">
            Cada corpo é único. Por isso, nossos protocolos são desenhados sob medida, 
            unindo o toque humano à precisão científica.
          </p>
        </motion.div>

        {/* Grade de Serviços com Stagger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="group bg-white p-8 rounded-3xl border border-quartz/20 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <div className="bg-quartz/30 w-12 h-12 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              
              <h3 className="font-serif text-xl text-aesthetic-gray mb-2">
                {service.title}
              </h3>
              
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-gold mb-4 block">
                {service.benefit}
              </span>
              
              <p className="font-sans text-sm text-aesthetic-gray/60 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Botão funcional com Scroll */}
              <motion.button 
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAssessment}
                className="mt-8 text-[10px] uppercase font-bold tracking-[0.15em] text-aesthetic-gray group-hover:text-gold transition-colors flex items-center gap-3 border-b border-transparent group-hover:border-gold pb-1 w-fit cursor-pointer"
              >
                {service.cta} <span className="text-lg">→</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}