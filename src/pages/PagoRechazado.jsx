import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import get_user_data from "../api/get_user_data";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const PagoRechazado = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const userId = queryParams.get("idUser");
  const period = queryParams.get("period") || "No disponible";
  const year = queryParams.get("year") || "No disponible";

  const [userData, setUserData] = useState({
    legalName: "Cargando...",
    rut: "Cargando...",
    imageUrl: "",
  });

  useEffect(() => {
    if (userId) {
      get_user_data({ userId })
        .then((data) => {
          setUserData({
            legalName: data.legalName || "No disponible",
            rut: data.rut || "No disponible",
            imageUrl: data.imageUrl || "",
          });
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setUserData({
            legalName: "Error al cargar",
            rut: "Error al cargar",
            imageUrl: "",
          });
        });
    }
  }, [userId]);

  const handleMisPagosClick = () => {
    if (
      userData.rut &&
      userData.rut !== "Cargando..." &&
      userData.rut !== "No disponible"
    ) {
      navigate(`/pagar-facturas/detalle/${userData.rut}`);
    }
  };

  const handleIrAPlataformaClick = () => {
    window.location.href = "https://app.homespotter.app/";
  };

  const defaultImageUrl = "/assets/user.jpg";

  return (
    <div className="overflow-hidden">
      <div
        className="h-24 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/wallpaperlogin.jpg)" }}
      ></div>
      <div className="mx-6 max-w-full lg:mx-auto lg:max-w-3xl">
        <div className="mb-8 mt-8 flex items-center">
          <div className="relative h-14 w-14 flex-shrink-0">
            <img
              src={userData.imageUrl || defaultImageUrl}
              alt="Usuario"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-50 object-contain ring-2 ring-gray-600 ring-offset-2 ring-offset-white sm:ring-2"
              onError={(e) => { e.target.onerror = null; e.target.src = defaultImageUrl; }}
            />
          </div>
          <div className="ml-4 w-full">
            <h1 className="text-md text-ellipsis font-hanken font-semibold text-gray-900">
              {userData.legalName}
            </h1>
            <p className="text-ellipsis font-hanken text-sm text-gray-700">
              RUT: {userData.rut}
            </p>
          </div>
        </div>
        <div className="mt-12 space-y-4 rounded-md border bg-gray-50 py-12">
          <div className="flex items-center justify-center">
            <XCircleIcon className="mb-4 h-24 w-24 text-red-500" />
          </div>
          <h1 className="text-center font-hanken text-xl font-semibold text-gray-900">
            ¡Pago Rechazado!
          </h1>
          <p className="text-md px-24 text-center font-hanken text-gray-700">
            Se ha rechazado el pago de tu factura correspondiente al periodo{" "}
            <span className="font-semibold">
              {period} {year}
            </span>
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row">
          <button
            onClick={handleMisPagosClick}
            className="mb-2 w-full rounded-md bg-gray-100 p-3 font-hanken text-sm font-semibold text-gray-900 hover:bg-gray-200 lg:mb-0 lg:w-1/2"
          >
            Ir a Facturas Pendientes
          </button>
          <button
            onClick={handleIrAPlataformaClick}
            className="w-full rounded-md bg-red-500 p-3 font-hanken text-sm font-semibold text-white hover:bg-red-600 lg:w-1/2"
          >
            Ir a la Aplicación
          </button>
        </div>
      </div>
    </div>
  );
};
