import { MapPin, Phone, Instagram, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const address = "Rua Francisco Martins de Souza, 912 - Jardim Gonzaga, Juazeiro do Norte - CE, 63046-510";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  // Link real de incorporação (iframe) - Certifique-se de usar a URL de 'Incorporar mapa' do Google
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d-39.3!3d-7.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTInMDAuMCJTIDM5wrAxOCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890";

  return (
    <footer id="localizacao" className="bg-white pt-16 md:pt-24 pb-12 border-t border-accent/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20 items-center">
          
          {/* LADO ESQUERDO: Informações de Contato Clínico */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <span className="font-sans text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4">
              Localização & Contato
            </span>
            <h3 className="font-serif text-3xl md:text-5xl text-accent mb-8 md:mb-10 leading-tight">
              O Consultório <br />
              <span className="italic text-primary font-light">Your Beauty</span>
            </h3>
            
            <div className="space-y-6 md:space-y-8 w-full max-w-sm lg:max-w-none">
              {/* Endereço Clínico */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group">
                <div className="bg-offwhite p-4 rounded-2xl shadow-sm border border-accent/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-sans font-bold text-accent uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-2">Endereço Clínico</p>
                  <p className="text-accent/70 leading-relaxed text-sm">
                    Rua Francisco Martins de Souza, 912<br />
                    Jardim Gonzaga — Juazeiro do Norte, CE
                  </p>
                </div>
              </div>

              {/* Atendimento */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group">
                <div className="bg-offwhite p-4 rounded-2xl shadow-sm border border-accent/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-sans font-bold text-accent uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-2">Atendimento Terapêutico</p>
                  <p className="text-accent/70 text-sm font-medium">(88) 98814-5310</p>
                </div>
              </div>

              {/* Instagram Profissional */}
              <a 
                href="https://www.instagram.com/esteticayourbeauty/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group mx-auto lg:mx-0 w-fit"
              >
                <div className="bg-offwhite p-4 rounded-2xl shadow-sm border border-accent/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shrink-0">
                  <Instagram size={22} />
                </div>
                <div>
                  <p className="font-sans font-bold text-accent uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-2">Instagram Profissional</p>
                  <p className="text-accent/70 group-hover:text-primary transition-colors text-sm font-medium">@esteticayourbeauty</p>
                </div>
              </a>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open(mapUrl, '_blank')}
              className="mt-10 md:mt-12 w-full sm:w-fit bg-accent text-white px-10 py-4 rounded-2xl font-sans text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-primary transition-all shadow-xl shadow-accent/10 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Navigation size={14} /> Traçar Rota no GPS
            </motion.button>
          </motion.div>

          {/* LADO DIREITO: Mapa com Estilo Premium */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="h-[350px] md:h-[550px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-2 border-accent/5 shadow-2xl relative group"
          >
            <iframe 
              src={iframeSrc} 
              className="w-full h-full grayscale-[40%] contrast-[1.1] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-accent/5 rounded-[2.5rem] md:rounded-[3rem]" />
          </motion.div>
        </div>

        {/* Rodapé Final de Marca */}
        <div className="text-center pt-10 border-t border-accent/5">
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-serif text-xl text-accent/80 tracking-tight">
              Your <span className="text-primary italic">Beauty</span>
            </h4>
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-accent/40 font-medium leading-loose px-4">
                © 2026 • Juazeiro do Norte — Ceará <br className="sm:hidden" />
                <span className="hidden sm:inline mx-4">•</span>
                Ciência aplicada ao cuidado corporal
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}