import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import EjemploTour from './components/EjemploTour'
import Planos from './components/Planos'
import Ventajas from './components/Ventajas'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="pt-20">
        <Servicios />
        <EjemploTour />
        <Planos />
        <Ventajas />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App