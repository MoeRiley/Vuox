import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Digitalizar tu Espacio?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Contáctanos y descubre cómo podemos transformar tu espacio en una experiencia digital inmersiva
        </p>
        
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input 
                type="text"
                name="nombre"
                placeholder="Tu nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-200"
              />
            </div>
            <div>
              <input 
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-200"
              />
            </div>
            <div>
              <textarea 
                name="mensaje"
                placeholder="Cuéntanos sobre tu proyecto..."
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all duration-200 resize-none"
              />
            </div>
            <button 
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 w-full md:w-auto"
            >
              Enviar Mensaje 🚀
            </button>
          </form>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-300">info@vuox.io</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-300">+56 9 9730 5192</p>
          </div>
          <div className="p-6">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="font-semibold mb-2">Horario</h3>
            <p className="text-gray-300">Lun - Vie: 9:00 - 18:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;