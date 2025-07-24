import Navbar from './components/NavBar'
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
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Servicios />
      <EjemploTour />
      <Planos />
      <Ventajas />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;