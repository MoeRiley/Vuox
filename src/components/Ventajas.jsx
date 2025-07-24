const Ventajas = () => {
  const ventajas = [
    { title: 'Precios Competitivos', desc: 'Tarifas justas y transparentes', icon: '💰' },
    { title: 'Plazos Definidos', desc: 'Entrega garantizada en tiempo', icon: '⏱️' },
    { title: 'Tecnología Matterport', desc: 'Líder mundial en captura 3D', icon: '🚀' },
    { title: 'Distribución Global', desc: 'Acceso desde cualquier lugar', icon: '🌍' },
    { title: 'Equipo Experto', desc: 'Profesionales certificados', icon: '👥' }
  ];

  return (
    <section id="ventajas" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          ¿Por qué elegir <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vuox?</span>
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Te ofrecemos acceso a tecnología de vanguardia 
          para mostrar tu propiedad, local o espacio comercial en alta calidad, desde cualquier lugar del mundo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ventajas.slice(0, 3).map((ventaja, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl hover:shadow-xl hover:bg-white/90 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {ventaja.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {ventaja.title}
              </h3>
              <p className="text-gray-600">
                {ventaja.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {ventajas.slice(3).map((ventaja, index) => (
            <div 
              key={index + 3}
              className="group p-8 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl hover:shadow-xl hover:bg-white/90 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {ventaja.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {ventaja.title}
              </h3>
              <p className="text-gray-600">
                {ventaja.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ventajas