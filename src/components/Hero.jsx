const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block p-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8">
          <div className="bg-white px-4 py-2 rounded-full">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🚀 Tecnología Matterport Avanzada
            </span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Vüox
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Creamos <span className="font-semibold text-blue-600">tours virtuales inmersivos</span> con 
          la tecnología de escaneo 3D más avanzada. Ideal para inmobiliarias, hoteles, tiendas y 
          espacios que buscan destacar online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contacto" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Solicitar Demo
          </a>
          <a 
            href="#ejemplo" 
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
          >
            Ver Ejemplo
          </a>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', label: 'Espacios Escaneados' },
            { number: '4K', label: 'Calidad Ultra HD' },
            { number: '24/7', label: 'Disponibilidad' },
            { number: '99%', label: 'Satisfacción' }
          ].map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero
