const Servicios = () => {
  const servicios = [
    { nombre: 'Captura 3D', icon: '📸', desc: 'Escaneo de alta precisión' },
    { nombre: 'Alojamiento', icon: '☁️', desc: 'Hosting incluido' },
    { nombre: 'Etiquetas interactivas', icon: '🏷️', desc: 'Información contextual' },
    { nombre: 'Fotos 4K', icon: '🎨', desc: 'Imágenes de alta calidad' },
    { nombre: 'Plano 2D', icon: '📐', desc: 'Vistas arquitectónicas' },
    { nombre: 'Plano 3D', icon: '🏗️', desc: 'Modelos tridimensionales' }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Nuestros <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Servicios</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
          Un paquete completo que incluye fotografía 3D de precisión con tecnología Matterport, 
          alojamiento en la nube, planos automáticos, fotos 4K extraídas y etiquetas interactivas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div 
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {servicio.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {servicio.nombre}
              </h3>
              <p className="text-gray-600">
                {servicio.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios