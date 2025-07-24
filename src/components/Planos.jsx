const Planos = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Automáticos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Generación automática de planos 2D y 3D de alta precisión.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/plano3d.jpg" 
                alt="Plano 3D - Visualización tridimensional" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Plano 3D</h3>
                <p className="text-sm">Vista tridimensional completa</p>
              </div>
            </div>
          </div>
          
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <img 
                src="/plano2d.jpg" 
                alt="Plano 2D - Vista arquitectónica" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Plano 2D</h3>
                <p className="text-sm">Medidas precisas y detalladas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planos