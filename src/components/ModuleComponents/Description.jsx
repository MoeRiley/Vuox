import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";

export default function Description({ title, description, video, pdfUrl }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Cargar el archivo JSON de la animación desde la URL proporcionada
    fetch(video)
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, [video]);

  return (
    <div className="relative">
      <div className="relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-24 lg:px-8 lg:py-32">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <h1 className="my-16 font-hanken text-4xl font-semibold tracking-tight text-gray-700 sm:my-0 sm:text-5xl">
                {title}
              </h1>
              <p className="my-12 text-lg leading-8 text-gray-600">
                {description}
              </p>
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-red-500 px-4 py-2 font-hanken text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                >
                  Ver Informe de Ejemplo
                </a>
              )}
            </div>
          </div>
          {animationData && (
            <div className="mt-16 sm:mt-0 px-6 sm:px-0">
              <Lottie
                animationData={animationData}
                loop
                className="w-full rounded-md object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
