import { motion } from 'framer-motion';
import KittyBow from '../components/KittyBow';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Lado da Imagem - Container Centralizado no Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-md md:max-w-none md:w-1/2 mx-auto"
          >
            <div className="absolute -top-6 -left-6 w-48 h-48 md:w-64 md:h-64 bg-quartz/20 rounded-3xl -z-10 animate-pulse" />
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-offwhite transform -rotate-2 md:-rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <img 
                src="/images/ges-profile.webp" 
                alt="Gislayne - Especialista Your Beauty"
                /* CORREÇÃO DE ENQUADRAMENTO:
                   Mudamos para object-[25%_center].
                   Isso foca no primeiro quarto da imagem (esquerda), 
                   trazendo a pessoa que está na direita para o centro da tela.
                */
                className="w-full h-[450px] md:h-[600px] object-cover object-[25%_center] md:object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-white p-4 md:p-5 rounded-full shadow-2xl border border-quartz/20 cursor-pointer z-10"
            >
              <KittyBow className="w-8 h-8 md:w-10 md:h-10 text-gold" />
            </motion.div>
          </motion.div>

          {/* Lado do Texto (Mantido igual) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <span className="font-sans text-gold uppercase tracking-[0.3em] text-xs mb-4 block font-bold">
              A mente por trás da excelência
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-aesthetic-gray mb-8 leading-tight">
              A arte de moldar resultados e <span className="italic text-gold">reabilitar vidas</span>
            </h2>
            
            <div className="space-y-6 font-sans text-aesthetic-gray/80 leading-relaxed text-base md:text-lg text-left">
              <p>
                Para mim, o corpo humano é uma estrutura fascinante que exige tanto 
                <span className="text-gold font-semibold italic"> rigor científico </span> 
                quanto sensibilidade artística. Minha paixão não está apenas na estética, mas no desafio de entender a sua anatomia para entregar o que há de mais avançado em performance e bem-estar.
              </p>

              <p>
                Especializar-me em 
                <span className="text-gold font-semibold italic"> Tecidos Moles e MITM </span> 
                foi uma escolha consciente: eu queria ir além do relaxamento superficial. Hoje, utilizo a ciência da liberação miofascial para esculpir contornos e, acima de tudo, devolver a liberdade para quem convive com dores que limitam o seu potencial.
              </p>
              
              <p className="font-medium text-aesthetic-gray italic border-l-2 border-gold pl-4">
                "No Your Beauty, não sigo apenas protocolos; eu assino resultados. É a união entre o estudo incansável e o prazer de ver cada cliente se redescobrir na própria pele."
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-quartz/30 flex flex-col items-center md:items-start gap-6">
              <div className="relative">
                <p className="font-serif text-3xl text-gold italic">Gislayne</p>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60 font-bold">Especialista Responsável</p>
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-quartz" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}