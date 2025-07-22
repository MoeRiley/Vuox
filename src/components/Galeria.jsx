const Galeria = () => (
  <section id="galeria" className="py-20 bg-gray-50 text-center">
    <h2 className="text-2xl font-bold mb-4">Galería</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <img src="/foto1.jpg" alt="Espacio 1" />
      <img src="/foto2.jpg" alt="Espacio 2" />
      <img src="/foto3.jpg" alt="Espacio 3" />
      <img src="/foto4.jpg" alt="Espacio 4" />
    </div>
  </section>
)

export default Galeria