import { GraduationCap, Award, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import KittyBow from '../components/KittyBow';

export default function Authority() {
  const credentials = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Base Científica",
      description: "Bacharelado dedicado a entender o corpo humano em sua totalidade, unindo saúde e estética integrativa."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Domínio Técnico",
      description: "Especialista em Técnicas Instrumentais (MITM) para tratar a causa da dor e devolver sua liberdade."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Anatomia Aplicada",
      description: "Estudo profundo dos tecidos moles, garantindo que cada toque seja seguro, preciso e transformador."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="autoridade" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho Animado */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <span className="font-sans text-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-4">
            Excelência em cada detalhe
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-aesthetic-gray mb-6">
            Onde a Ciência encontra o <span className="italic text-gold">Cuidado</span>
          </h2>
          
          {/* Divisor com o Laço */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-4"
          >
            <KittyBow className="w-8 h-8 text-gold/40" />
          </motion.div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-[1px] bg-gold/30 mx-auto rounded-full" 
          />
        </motion.div>

        {/* Grade de Credenciais */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {credentials.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group flex flex-col items-center text-center p-10 rounded-[2rem] bg-offwhite/50 border border-transparent hover:border-gold/10 hover:bg-white transition-all duration-500 hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-aesthetic-gray mb-4 tracking-wide">
                {item.title}
              </h3>
              <p className="font-sans text-aesthetic-gray/60 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bloco de Citação Humanizada */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-24 p-8 md:p-14 bg-offwhite rounded-[3rem] border border-quartz/20 flex flex-col md:flex-row items-center gap-10 shadow-sm relative"
        >
          {/* Foto da Especialista */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-2xl shrink-0 rotate-2">
            <img 
              src="/images/ges-authority.webp"
              alt="Gislayne - Especialista"
              className="w-full h-full object-cover scale-110"
            />
          </div>

          <div className="flex-1">
            <blockquote className="font-serif text-2xl md:text-3xl text-aesthetic-gray leading-snug mb-8">
              "Acredito que o seu corpo é o seu <span className="text-gold italic">único lar</span>. Minha missão é aplicar o máximo da ciência e do meu toque para que você viva com <span className="text-gold">leveza</span>, sem dores e com o prazer de se sentir bem na própria pele."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gold/40" />
              <cite className="font-sans text-gold font-bold uppercase tracking-[0.2em] text-[10px] not-italic">
                Gislayne — Sua Especialista
              </cite>
            </div>
          </div>

          {/* Decoração Sutil de Fundo */}
          <div className="absolute top-6 right-8 opacity-5">
            <KittyBow className="w-24 h-24 text-gold" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}