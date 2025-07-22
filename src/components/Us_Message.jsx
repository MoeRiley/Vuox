import React from "react";

const Us_Message = () => {
  return (
    <div className="relative isolate items-start overflow-hidden bg-white pb-36">
      <div className="mx-auto h-full w-full max-w-7xl">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-md border-t-4 border-red-500 bg-white p-8 text-center shadow-lg sm:p-12">
            <h2 className="font-hanken text-2xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
              Nuestro Compromiso
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transformamos datos urbanísticos en herramientas que empoderan
              decisiones, ciudades y territorios. Con{" "}
              <span className="font-semibold">rigor técnico</span> y
              <span className="font-semibold"> propósito claro</span>, creamos
              soluciones que trascienden los números para resolver desafíos
              reales del entorno urbano.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us_Message;
