const Contacto = () => (
  <section id="contacto" className="py-20 bg-white text-center">
    <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
    <form className="max-w-md mx-auto space-y-4">
      <input type="text" placeholder="Nombre" className="w-full border px-4 py-2" />
      <input type="email" placeholder="Correo" className="w-full border px-4 py-2" />
      <textarea placeholder="Mensaje" className="w-full border px-4 py-2" rows="4" />
      <button type="submit" className="bg-black text-white px-6 py-2">Enviar</button>
    </form>
  </section>
)

export default Contacto