import { useState } from 'react';
import { X } from 'lucide-react';

const Planos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc, title, description) => {
    setSelectedImage({ src: imageSrc, title, description });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
            <div 
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleImageClick("/media/plano3dejemplo.jpeg", "Plano 3D", "Vista tridimensional completa")}
            >
              <img 
                src="/media/plano3dejemplo.jpeg" 
                alt="Plano 3D - Visualización tridimensional" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Plano 3D</h3>
                <p className="text-sm">Vista tridimensional completa</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="group">
            <div 
              className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleImageClick("/media/plano2dejemplo.jpeg", "Plano 2D", "Modelación arquitectónica")}
            >
              <img 
                src="/media/plano2dejemplo.jpeg" 
                alt="Plano 2D - Vista arquitectónica" 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-semibold">Plano 2D</h3>
                <p className="text-sm">Modelación arquitectónica</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón de cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              >
                <X size={24} />
              </button>
              
              {/* Imagen */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Información de la imagen */}
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-blue-100">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Planos;