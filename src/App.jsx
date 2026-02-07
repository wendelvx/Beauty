import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Authority from './sections/Authority'

function App() {
  return (
    <main className="min-h-screen bg-offwhite">
      <Navbar />
      <Hero />
      <Authority /> {/* Adicione aqui */}
      {/* Próximas seções... */}
      <div className="h-screen bg-offwhite" /> {/* Espaçador temporário para testar scroll */}
    </main>
  )
}

export default App