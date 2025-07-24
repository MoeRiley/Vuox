import React, { useState, useEffect } from 'react';

// Componente Navbar mejorado
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          <a href= '#hero'>vuox.io</a>
        </div>
        
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {['Servicios', 'Tour Virtual', 'Ventajas', 'Galería', 'Contacto'].map((item, index) => {
            let href;
            if (item === 'Tour Virtual') {
              href = '#ejemplo';
            } else if (item === 'Galería') {
              href = '#galeria';
            } else {
              href = `#${item.toLowerCase()}`;
            }
            return (
              <li key={index}>
                <a 
                  href={href} 
                  className="hover:text-blue-600 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 group-hover:w-full"></span>
                </a>
              </li>
            );
          })}
        </ul>
        
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-6 py-4 space-y-3">
          {['Servicios', 'Tour Virtual', 'Ventajas', 'Galería', 'Contacto'].map((item, index) => {
            let href;
            if (item === 'Tour Virtual') {
              href = '#ejemplo';
            } else if (item === 'Galería') {
              href = '#galeria';
            } else {
              href = `#${item.toLowerCase()}`;
            }
            return (
              <a 
                key={index}
                href={href} 
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar