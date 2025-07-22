const EjemploTour = () => (
  <section id="ejemplo" className="py-20 bg-white text-center">
    <h2 className="text-xl font-bold mb-4">Ejemplo</h2>
    <iframe
      className="mx-auto w-full max-w-3xl aspect-video"
      src="https://my.matterport.com/show/?m=XXXXXXXX"
      allowFullScreen
      title="Ejemplo de tour virtual"
    />
    <p className="mt-2 text-sm text-gray-500">Powered by Matterport</p>
  </section>
)

export default EjemploTour