import { GraduationCap, Award, Fingerprint, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import KittyBow from '../components/KittyBow';

export default function Authority() {
  const credentials = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formação UNISA",
      description: "Bacharelado acadêmico com foco em anatomia e fisiologia, garantindo uma prática baseada em evidências científicas."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Método MITM",
      description: "Especialista em Liberação Tecidual Instrumental. Precisão cirúrgica no toque para desativar pontos de dor."
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Cuidado Individualizado",
      description: "Sua anatomia é única. Cada protocolo é desenhado após uma avaliação clínica rigorosa da sua biomecânica."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, // Reduzido de 0.2 para ser mais fluido no mobile
        delayChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, // Reduzido o deslocamento vertical
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="autoridade" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho de Autoridade */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Trigger mais sensível
          className="text-center mb-12 md:mb-20 flex flex-col items-center"
        >
          <span className="font-sans text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
            A Ciência por trás do toque
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-accent mb-6 max-w-3xl leading-tight">
            Tecnologia Aplicada à <span className="italic text-primary font-light">Reabilitação e Estética</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 md:w-12 bg-primary/20" />
            <KittyBow className="w-6 h-6 text-primary/30" />
            <div className="h-[1px] w-8 md:w-12 bg-primary/20" />
          </div>
        </motion.div>

        {/* Grade de Credenciais */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger mais rápido no scroll
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {credentials.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col items-center text-center p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-offwhite/40 border border-accent/5 hover:border-primary/20 hover:bg-white transition-all duration-500"
            >
              <div className="text-primary mb-6 bg-white p-4 rounded-2xl shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-accent mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="font-sans text-accent/60 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bloco de Citação - Promessa Central */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24 p-8 md:p-16 bg-accent rounded-[2.5rem] md:rounded-[3.5rem] flex flex-col md:flex-row items-center gap-10 md:gap-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-radial-[at_top_right] from-white/5 to-transparent pointer-events-none" />

          {/* Foto da Especialista */}
          <div className="relative shrink-0">
            <div className="w-32 h-32 md:w-56 md:h-56 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl rotate-2">
              <img 
                src="/images/ges-authority.webp"
                alt="Gislayne - Especialista em Terapias Manuais"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-primary text-white text-[8px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
              Expert MITM
            </div>
          </div>

          <div className="flex-1 relative z-10 text-center md:text-left">
            <blockquote className="font-serif text-xl md:text-4xl text-white/95 leading-tight mb-6 md:mb-8">
              "Eu não apenas trato sua pele ou músculo; eu <span className="text-primary italic">devolvo a funcionalidade</span> e o conforto ao seu corpo através da ciência aplicada."
            </blockquote>
            
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-8 md:w-12 h-[1px] bg-primary" />
              <cite className="font-sans text-primary font-bold uppercase tracking-[0.3em] text-[10px] not-italic">
                Gislayne — Bacharel pela UNISA
              </cite>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}