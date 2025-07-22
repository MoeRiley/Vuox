const Servicios = () => (
  <section id="servicios" className="py-20 bg-gray-50 text-center">
    <h2 className="text-2xl font-bold mb-4">Nuestros servicios</h2>
    <p className="max-w-xl mx-auto mb-8">
      Incluye la fotografía 3D precisa con tecnología Matterport, más alojamiento, planos 2D y 3D automáticos, fotos 4K extraídas y etiquetas interactivas.
    </p>
    <div className="flex justify-center gap-4 flex-wrap">
          <ServicioIcono nombre="Captura 3D" />
          <ServicioIcono nombre="Alojamiento" />
          <ServicioIcono nombre="Etiquetas interactivas" />
          <ServicioIcono nombre="Fotos 4K" />
          <ServicioIcono nombre="Plano 2D" />
          <ServicioIcono nombre="Plano 3D" />
        </div>
  </section>
)

function ServicioIcono({ nombre }) {
  return (
    <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-md shadow-sm text-sm text-center text-gray-700 p-2 hover:shadow-md">
      {nombre}
    </div>
  );
}

export default Servicios