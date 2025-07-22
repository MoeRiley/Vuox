import React from "react";
import Code from "./Code"; // Asume que este es tu componente personalizado
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroCode() {
  return (
    <div className="relative">
      <img
        src="/assets/wallpaperlogin.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-100 md:object-center"
      />
      <div className="relative z-10 overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-24">
          <div className="px-6 lg:mr-24 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <h1 className="my-16 font-hanken text-4xl font-semibold tracking-tight text-white sm:my-0 sm:text-5xl">
                Intégrate fácilmente con{" "}
                <span className="text-red-500">nosotros.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Utiliza nuestra API para obtener la información que necesitas,
                de la forma que mejor se adapte a tu estructura.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://api.homespotter.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-hanken text-sm font-semibold leading-6 text-white hover:text-red-500"
                >
                  Ver Documentación{" "}
                  <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 px-6 sm:mt-0 lg:px-0">
            <Code />
          </div>
        </div>
      </div>
    </div>
  );
}
