const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              vuox.io
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transformamos espacios físicos en experiencias digitales inmersivas 
              utilizando la tecnología más avanzada de Matterport.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                📷
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-white transition-colors">Tours Virtuales</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Fotografía 3D</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Planos Digitales</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors">Quiénes Somos</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} vuox.io — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer