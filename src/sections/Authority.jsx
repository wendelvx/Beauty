import { GraduationCap, Award, Microscope } from 'lucide-react';

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

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-aesthetic-gray mb-4">
            Ciência por trás da <span className="italic text-gold">Beleza</span>
          </h2>
          <div className="w-20 h-1 bg-quartz mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {credentials.map((item, index) => (
            <div 
              key={index} 
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
            </div>
          ))}
        </div>

        {/* Citação de Autoridade */}
        <div className="mt-20 p-10 bg-offwhite rounded-3xl border border-quartz/20 flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
             {/* Placeholder para a foto da Gislayne */}
            <img 
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300" 
              alt="Gislayne - Especialista"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <blockquote className="font-serif text-xl text-aesthetic-gray italic mb-4">
              "Minha missão é unir o rigor acadêmico da UNISA com técnicas manuais avançadas para entregar não apenas estética, mas saúde funcional."
            </blockquote>
            <cite className="font-sans text-gold font-bold uppercase tracking-widest text-xs not-italic">
              — Gislayne, Fundadora da Your Beauty
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}