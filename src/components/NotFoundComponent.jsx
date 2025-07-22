import React from "react";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 font-hanken text-3xl font-semibold tracking-tight text-gray-700 sm:text-5xl">
            ¡Ups! Nada por aquí
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            No encontramos la página solicitada.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="mb-4 rounded-md bg-red-500 px-4 py-2 font-hanken text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mb-0"
            >
              Volver a Inicio
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
