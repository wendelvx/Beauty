import { GraduationCap, Award, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';
import KittyBow from '../components/KittyBow'; // Importando o laço

export default function Authority() {
  const credentials = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formação UNISA",
      description: "Bacharelado com foco em estética avançada e saúde integrativa."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificação MITM",
      description: "Especialista em Técnicas Instrumentais e Liberação Miofascial."
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Tecidos Moles",
      description: "Estudo profundo da anatomia aplicada ao alívio da dor e performance."
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
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho Animado com o Laço */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-aesthetic-gray mb-4">
            Ciência por trás da <span className="italic text-gold">Beleza</span>
          </h2>
          
          {/* O LAÇO: Atuando como um divisor de luxo */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-4"
          >
            <KittyBow className="w-8 h-8 text-quartz/60" />
          </motion.div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-quartz mx-auto rounded-full" 
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
              className="group flex flex-col items-center text-center p-8 rounded-2xl hover:bg-offwhite transition-colors duration-300"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl text-aesthetic-gray mb-3 tracking-wide">
                {item.title}
              </h3>
              <p className="font-sans text-aesthetic-gray/70 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Citação de Autoridade */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 p-10 bg-offwhite rounded-3xl border border-quartz/20 flex flex-col md:flex-row items-center gap-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
            <img 
              src="/images/ges-authority.webp"
              alt="Gislayne - Especialista"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <blockquote className="font-serif text-xl text-aesthetic-gray italic mb-4">
              "Minha missão é unir o rigor acadêmico da UNISA com técnicas manuais avançadas para entregar não apenas estética, mas saúde funcional."
            </blockquote>
            <cite className="font-sans text-gold font-bold uppercase tracking-widest text-xs not-italic flex items-center gap-2">
              — Gislayne, Fundadora da Your Beauty
            </cite>
          </div>
        </motion.div>

      </div>
    </section>
  );
}