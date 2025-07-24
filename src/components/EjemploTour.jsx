const EjemploTour = () => {
  return (
    <section id="ejemplo" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Experimenta la <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inmersión 3D</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Explora este espacio como si estuvieras ahí. Navega, interactúa y descubre cada detalle.
        </p>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <div className="relative bg-white p-4 rounded-2xl shadow-xl">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://my.matterport.com/show/?m=JCoYDcanvMH"
              allowFullScreen
              title="Tour virtual inmersivo"
            />
            <p className="mt-4 text-sm text-gray-500 flex items-center justify-center gap-2">
              <span>⚡</span> Powered by Matterport
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EjemploTour