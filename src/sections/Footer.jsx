import { MapPin, Phone, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const address = "Rua Francisco Martins de Souza, 912 - Jardim Gonzaga, Juazeiro do Norte - CE, 63046-510";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
  // Link para o Maps (Iframe) - Usando a localização aproximada para Juazeiro
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.123456789!2d-39.3134567!3d-7.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTQnMDQuNCJTIDM5wrAxOCc0OC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

  return (
    <footer id="localizacao" className="bg-offwhite pt-24 pb-12 border-t border-quartz/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* LADO ESQUERDO: Informações de Contato */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-4xl text-aesthetic-gray mb-8">
              Onde nos <span className="italic text-gold">encontrar</span>
            </h3>
            
            <div className="space-y-8">
              {/* Endereço */}
              <div className="flex items-start gap-5 group">
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <MapPin size={24} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <p className="font-sans font-bold text-aesthetic-gray uppercase tracking-wider text-xs mb-1">Localização</p>
                  <p className="text-aesthetic-gray/70 leading-relaxed max-w-xs">
                    Rua Francisco Martins de Souza, 912<br />
                    Jardim Gonzaga, Juazeiro do Norte - CE<br />
                    63046-510
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex items-center gap-5 group">
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Phone size={24} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <p className="font-sans font-bold text-aesthetic-gray uppercase tracking-wider text-xs mb-1">WhatsApp</p>
                  <p className="text-aesthetic-gray/70">(88) 98814-5310</p>
                </div>
              </div>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/esteticayourbeauty/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="bg-white p-3 rounded-xl shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <Instagram size={24} className="text-gold group-hover:text-white" />
                </div>
                <div>
                  <p className="font-sans font-bold text-aesthetic-gray uppercase tracking-wider text-xs mb-1">Instagram</p>
                  <p className="text-aesthetic-gray/70 group-hover:text-gold transition-colors">@esteticayourbeauty</p>
                </div>
              </a>
            </div>

            <button 
              onClick={() => window.open(mapUrl, '_blank')}
              className="mt-12 w-fit bg-gold text-white px-10 py-4 rounded-full font-sans text-xs uppercase font-bold tracking-[0.2em] hover:bg-gold/90 transition-all shadow-lg shadow-gold/20"
            >
              Traçar Rota no GPS
            </button>
          </motion.div>

          {/* LADO DIREITO: Mapa com Estilo Premium */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl relative group"
          >
            <iframe 
              src={iframeSrc} 
              className="w-full h-full grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out"
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
            {/* Overlay sutil para o mapa parecer mais integrado ao site */}
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[2rem]" />
          </motion.div>
        </div>

        {/* Rodapé Final */}
        <div className="text-center pt-12 border-t border-quartz/20">
          <div className="flex flex-col items-center gap-4">
             <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-aesthetic-gray/50">
              © 2026 Your Beauty • Ciência por trás da Beleza
            </p>
            <p className="font-sans text-[9px] uppercase tracking-widest text-aesthetic-gray/30 italic">
              Juazeiro do Norte - Ceará
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}