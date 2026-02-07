import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Authority from './sections/Authority'
import Services from './sections/Services'
import About from './sections/About'
import PreAssessment from './sections/PreAssessment' // Novo Import
import Footer from './sections/Footer'
import WhatsAppBtn from './components/WhatsAppBtn'

function App() {
  return (
    // Note a classe selection: Isso muda a cor de quando o usuário seleciona um texto no site. 
    // Um detalhe de luxo que faz toda a diferença.
    <main className="min-h-screen bg-offwhite selection:bg-quartz/60 selection:text-gold">
      
      {/* Navegação Fixa */}
      <Navbar />

      {/* Dobra 1: Impacto Visual (Vídeo) */}
      <Hero />

      {/* Dobra 2: Prova Técnica (UNISA/MITM) */}
      <Authority />

      {/* Dobra 3: O que ela faz (Cards) */}
      <Services />

      {/* Dobra 4: Quem ela é (Humanização) */}
      <About />

      {/* Dobra 5: Onde a mágica acontece (Coleta de Leads) */}
      <PreAssessment />

      {/* Dobra 6: Informações Finais e Mapa */}
      <Footer />

      {/* Elemento Fixo: Call to Action direto */}
      <WhatsAppBtn />

    </main>
  )
}

export default App