import React from 'react';

export default function Hero() {
  return (
    <header className="bg-white shadow-md">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold text-gray-800">vuox.io</div>
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
          <li><a href="#servicios" className="hover:text-black">Servicios</a></li>
          <li><a href="#tour" className="hover:text-black">Tour Virtual</a></li>
          <li><a href="#ventajas" className="hover:text-black">Ventajas</a></li>
          <li><a href="#galeria" className="hover:text-black">Galería</a></li>
          <li><a href="#contacto" className="hover:text-black">Contacto</a></li>
        </ul>
        <div className="md:hidden">
          <button aria-label="Abrir menú">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <section id="servicios" className="text-center py-12 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Vüox</h1>
        <p className="text-gray-600 mb-6">
          Brindamos la tecnología de escaneo en 3D más avanzada para crear tours virtuales inmersivos
          con Matterport. <br/> Ideal para inmobiliarias, hoteles, tiendas y espacios que buscan destacar de manera online.
        </p>
      </section>
    </header>
  );
}
