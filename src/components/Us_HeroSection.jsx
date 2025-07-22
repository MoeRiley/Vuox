import React from "react";

export default function Us_HeroSection() {
  return (
    <div className="relative mt-16">
      <img
        src="/assets/wallpaperlogin.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-100 md:object-center"
      />
      <div className="relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-hanken text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              <span className="text-red-500">Potenciando decisiones</span> en el
              mercado inmobiliario
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              Transformamos datos urbanísticos complejos en información
              accesible, precisa y eficiente para impulsar el éxito de todos los
              actores del mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
