const Galeria = () => {
  const images = [
    { src: '/foto1.jpg', alt: 'Espacio Residencial Moderno' },
    { src: '/foto2.jpg', alt: 'Hotel Boutique Premium' },
    { src: '/foto3.jpg', alt: 'Showroom Comercial' },
    { src: '/foto4.jpg', alt: 'Oficina Corporativa' }
  ];

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Nuestros <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Proyectos</span>
        </h2>
        <p className="text-xl text-gray-600 mb-16">
          Explora algunos de los espacios que hemos digitalizado
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria