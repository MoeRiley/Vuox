import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { validate, clean, format } from "rut.js";

export const PagarFacturas = () => {
  const [rut, setRUT] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const inputRUT = e.target.value;
    const cleanedRUT = clean(inputRUT);
    const formattedRUT = format(cleanedRUT);

    setRUT(formattedRUT);

    if (validate(cleanedRUT)) {
      setError("");
    } else {
      setError("RUT no válido");
    }
  };

  const handleSubmit = () => {
    const cleanedRUT = clean(rut); // Limpia el RUT, quitando puntos y guion

    // Formatear el RUT agregando el guion antes del dígito verificador
    const formattedRUT = `${cleanedRUT.slice(0, -1)}-${cleanedRUT.slice(-1)}`;

    if (!validate(formattedRUT)) {
      setError("RUT no válido");
      return;
    }

    setError("");
    navigate(`/pagar-facturas/detalle/${formattedRUT}`);
  };

  return (
    <div className="flex h-screen">
      <div
        className="hidden h-screen w-1/2 bg-cover bg-center md:block"
        style={{ backgroundImage: "url(/assets/wallpaperlogin.jpg)" }}
      ></div>
      <div className="flex h-screen w-full items-center justify-center md:h-auto md:w-1/2">
        <div className="w-full max-w-md space-y-8 px-6 text-center">
          <h3 className="font-hanken text-3xl font-semibold text-gray-700">
            Ingresa tu rut
          </h3>
          <div className="space-y-4">
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="rut"
                id="rut"
                className={`block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ${
                  error && error === "RUT no válido"
                    ? "ring-red-300"
                    : "ring-gray-300"
                } sm:text-sm sm:leading-6`}
                placeholder="12.345.678-9"
                value={rut}
                onChange={handleChange}
                aria-invalid={!!error}
              />
              {error && error === "RUT no válido" ? (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                rut &&
                !error && (
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <CheckCircleIcon
                      className="h-5 w-5 text-green-500"
                      aria-hidden="true"
                    />
                  </div>
                )
              )}
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="inline-flex w-full items-center justify-center gap-x-2 rounded-md bg-red-500 px-3.5 py-2.5 font-hanken text-sm font-semibold text-white shadow-sm hover:bg-red-600"
            >
              Buscar Facturas
            </button>
          </div>
          {error && error !== "RUT no válido" && (
            <p
              className="mt-2 rounded-md border border-red-500 bg-red-50 px-4 py-2 text-left font-hanken text-xs font-normal text-red-600"
              id="rut-error"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};