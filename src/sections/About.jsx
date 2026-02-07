import { motion } from 'framer-motion';
import KittyBow from '../components/KittyBow';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Lado da Imagem com Moldura Estilizada */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-1/2"
          >
            {/* Decoração de fundo (Pulse suave) */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-quartz/20 rounded-3xl -z-10 animate-pulse" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-offwhite transform -rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <img 
                src="/images/ges-profile.webp"
                alt="Gislayne - Your Beauty"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* O Toque Secreto: KittyBow como um Selo de Luxo */}
            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-full shadow-2xl border border-quartz/20 cursor-pointer"
            >
              <KittyBow className="w-10 h-10 text-gold" />
            </motion.div>
          </motion.div>

          {/* Lado do Texto */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="font-sans text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-semibold">
              Conheça a mente por trás da marca
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-aesthetic-gray mb-8 leading-tight">
              Gislayne: Autoridade em <span className="italic text-gold">Saúde Estética</span>
            </h2>
            
            <div className="space-y-6 font-sans text-aesthetic-gray/80 leading-relaxed text-base md:text-lg">
              <p>
                Com formação acadêmica pela <strong className="text-aesthetic-gray font-semibold underline decoration-quartz underline-offset-4">UNISA</strong>, entendi que a estética não é apenas sobre o que vemos, mas sobre como o corpo funciona em sua totalidade.
              </p>
              <p>
                Minha especialização em <strong className="text-aesthetic-gray font-semibold">Tecidos Moles e MITM</strong> me permite ir além do relaxamento, focando na liberação miofascial e no alívio real de dores crônicas, sempre com embasamento científico.
              </p>
              <p className="font-medium text-aesthetic-gray italic">
                "No Your Beauty, cada protocolo é uma assinatura de cuidado, ciência e o luxo de se sentir bem na própria pele."
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-quartz/30 flex items-center gap-6">
              <div className="relative">
                <p className="font-serif text-3xl text-gold italic">Gislayne</p>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold">Especialista Responsável</p>
                {/* Linha decorativa sob o nome */}
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-quartz" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}