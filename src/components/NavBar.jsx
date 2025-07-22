const Navbar = () => (
  <nav className="fixed w-full bg-white shadow z-50">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">vuox.io</h1>
        <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
            <li><a href="#servicios" className="hover:text-black">Servicios</a></li>
            <li><a href="#ejemplo" className="hover:text-black">Tour Virtual</a></li>
            <li><a href="#ventajas" className="hover:text-black">Ventajas</a></li>
            <li><a href="#galeria" className="hover:text-black">Galería</a></li>
            <li><a href="#contacto" className="hover:text-black">Contacto</a></li>
        </ul>
    </div>
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
)

export default Navbar