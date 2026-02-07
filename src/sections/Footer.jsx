import { MapPin, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="localizacao" className="bg-offwhite pt-20 pb-10 border-t border-quartz/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        
        {/* Informações de Contato */}
        <div>
          <h3 className="font-serif text-3xl text-aesthetic-gray mb-6">Onde nos <span className="italic text-gold">encontrar</span></h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold mt-1" />
              <div>
                <p className="font-sans font-bold text-aesthetic-gray">Juazeiro do Norte - CE</p>
                <p className="text-aesthetic-gray/70">Rua Francisco Martins de Souza</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-gold" />
              <p className="text-aesthetic-gray/70">(88) 99999-9999</p>
            </div>
            <div className="flex items-center gap-4 hover:text-gold transition-colors cursor-pointer">
              <Instagram className="text-gold" />
              <p className="text-aesthetic-gray/70">@yourbeauty.gislayne</p>
            </div>
          </div>
          
          <button 
            onClick={() => window.open('https://www.google.com/maps', '_blank')}
            className="mt-8 bg-white border border-gold/30 text-gold px-8 py-3 rounded-full font-sans text-xs uppercase font-bold tracking-widest hover:bg-gold hover:text-white transition-all shadow-sm"
          >
            Abrir no GPS
          </button>
        </div>

        {/* Mapa Simplificado (Placeholder ou Iframe) */}
        <div className="h-64 md:h-full min-h-[300px] bg-quartz/10 rounded-3xl overflow-hidden border border-white shadow-inner relative">
          {/* Substitua o SRC abaixo pelo link do iframe do seu Google Maps real */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0!2d-39.3!3d-7.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTInMDAuMCJTIDM5wrAxOCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v123456789" 
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-quartz/10">
        <p className="font-sans text-[10px] uppercase tracking-widest text-aesthetic-gray/40">
          © 2026 Your Beauty • Desenvolvido com Ciência e Arte
        </p>
      </div>
    </footer>
  );
}