import React, { useEffect, useState, useRef, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { Wallet } from "@mercadopago/sdk-react";
import get_user_pending_facturas from "../api/get_user_pending_facturas";
import { createPaymentPreference } from "../api/create_payment_preference";
import InvoicesList from "../components/PaymentsComponents/InvoicesList";
import PaymentInformation from "../components/PaymentsComponents/PaymentInformation";
import InvoiceSelector from "../components/PaymentsComponents/InvoiceSelector";
import { initMercadoPago } from "@mercadopago/sdk-react";
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

initMercadoPago(import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY);

export const PagarFacturasDetail = () => {
  const { rut } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [preferences, setPreferences] = useState({});
  const walletRootRef = useRef(null);
  const preferencesCreatedRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createAllPaymentPreferences = useCallback(async (invoices) => {
    if (preferencesCreatedRef.current) return; // Evitar ejecución múltiple

    const preferencesMap = {};

    for (const invoice of invoices) {
      const netAmount = invoice.invoiceTotalCLP;
      const iva = netAmount * 0.19; // No redondear el IVA aquí
      const totalAmount = Math.ceil(netAmount + iva); // Redondear solo el total final

      const items = [
        {
          title: `${invoice.month} ${invoice.year} - HomeSpotter`,
          quantity: 1,
          unit_price: totalAmount,
        },
      ];

      const timestamp = Date.now(); // Obtener el timestamp actual
      const externalReference = `${invoice.idUser}-${invoice.idInvoice}-${timestamp}`;

      const invoiceDetails = {
        idInvoice: invoice.idInvoice,
        idUser: invoice.idUser,
        month: invoice.month,
        year: invoice.year,
        basePlan: invoice.basePlan,
        dayUF: invoice.dayUF,
        dayUFValue: invoice.dayUFValue,
        overConsumption: invoice.overConsumption,
        invoiceUF: invoice.invoiceUF,
        invoiceTotalCLP: invoice.invoiceTotalCLP,
        invoiceUrl: invoice.invoiceUrl,
      };

      try {
        const preferenceId = await createPaymentPreference(
          items,
          externalReference,
          invoiceDetails
        );
        preferencesMap[invoice.idInvoice] = preferenceId;
      } catch (error) {
        console.error("Error al crear la preferencia de pago:", error);
        setError(
          "Hubo un problema al procesar el pago. Por favor, intenta de nuevo."
        );
      }
    }

    setPreferences(preferencesMap);
    preferencesCreatedRef.current = true; // Marcar como ejecutado
  }, []);

  useEffect(() => {
    const fetchFacturas = async () => {
      try {
        const params = { rut };
        const response = await get_user_pending_facturas(params);

        if (!response || response.userExists === false) {
          setError("El usuario no existe en la base de datos.");
        } else {
          const sortedFacturas = response.pendingFacturas.sort((a, b) => {
            if (a.year === b.year) {
              return a.period - b.period;
            }
            return a.year - b.year;
          });

          setData({
            ...response,
            pendingFacturas: sortedFacturas,
          });

          await createAllPaymentPreferences(sortedFacturas);

          if (!selectedInvoice) {
            // Solo seleccionar si no hay factura seleccionada
            const oldestInvoice = sortedFacturas[0];
            setSelectedInvoice(oldestInvoice);
          }
        }
      } catch (err) {
        setError("Hubo un error buscando las facturas.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (!preferencesCreatedRef.current) {
      fetchFacturas();
    }
  }, [rut, createAllPaymentPreferences, selectedInvoice]);

  const handleInvoiceSelection = (invoice) => {
    setSelectedInvoice(invoice);
  };

  useEffect(() => {
    const walletContainer = document.getElementById("wallet_container");
    if (walletContainer) {
      if (!walletRootRef.current) {
        walletRootRef.current = createRoot(walletContainer);
      }

      if (selectedInvoice && preferences[selectedInvoice.idInvoice]) {
        walletRootRef.current.render(
          <Wallet
            key={`${preferences[selectedInvoice.idInvoice]}-${
              selectedInvoice.idInvoice
            }`}
            initialization={{
              preferenceId: preferences[selectedInvoice.idInvoice],
            }}
            customization={{}}
          />
        );
      } else {
        walletRootRef.current.unmount();
      }
    }
  }, [selectedInvoice, preferences]);

  if (loading) {
    return (
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-50">
        <div className="flex items-center justify-center">
          <BeatLoader color="red" size={10} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div
          className="h-24 bg-cover bg-center"
          style={{ backgroundImage: "url(/assets/wallpaperlogin.jpg)" }}
        ></div>
        <div className="mx-auto mb-24 max-w-5xl">
          <div className="flex h-64 w-full flex-col items-center justify-center px-24">
            <ExclamationCircleIcon className="mb-4 h-16 w-16 text-red-500" />
            <p className="text-gray-90 text-md px-6 text-center font-hanken font-semibold text-gray-700 sm:px-24 sm:text-xl">
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const netAmount = selectedInvoice ? selectedInvoice.invoiceTotalCLP : 0;
  const iva = netAmount * 0.19; // No redondear el IVA aquí
  const totalAmount = Math.ceil(netAmount + iva); // Redondear solo el total final

  return (
    <div className="mb-24 overflow-hidden">
      <div
        className="h-24 bg-cover bg-center"
        style={{ backgroundImage: "url(/assets/wallpaperlogin.jpg)" }}
      ></div>
      <div className="mx-6 max-w-full lg:mx-auto lg:max-w-3xl">
        {data && (
          <div className="mb-8 mt-8 flex items-center">
            <div className="relative h-14 w-14 flex-shrink-0">
              <img
                src={data.imageUrl || "/assets/user.jpg"}
                alt={data.legalName || "Usuario"}
                className="absolute inset-0 h-full w-full rounded-full bg-gray-50 object-contain ring-2 ring-gray-600 ring-offset-2 ring-offset-white sm:ring-2"
              />
            </div>
            <div className="ml-4 w-full">
              <h1 className="text-md text-ellipsis font-hanken font-semibold text-gray-700">
                {data.legalName}
              </h1>
              <p className="text-ellipsis font-hanken text-sm text-gray-700">
                RUT: {data.rut}
              </p>
            </div>
          </div>
        )}

        {data && data.pendingFacturas.length > 0 && (
          <p className="text-md mb-8 font-hanken font-semibold text-gray-700">
            Tienes {data.pendingFacturas.length}{" "}
            {data.pendingFacturas.length === 1
              ? "factura pendiente de pago"
              : "facturas pendientes de pago"}
            .
          </p>
        )}
        <InvoiceSelector
          invoices={data.pendingFacturas}
          onInvoiceSelect={handleInvoiceSelection}
          className="w-full"
        />

        <div className="mt-12 flex max-w-full flex-col gap-8 lg:flex-row">
          {data && data.pendingFacturas && data.pendingFacturas.length === 0 ? (
            <div className="flex h-32 w-full flex-col items-center justify-center">
              <CheckCircleIcon className="mb-4 h-16 w-16 text-green-500" />
              <p className="text-gray-90 text-md px-6 text-center font-hanken font-semibold text-gray-700 sm:px-24 sm:text-xl">
                Tu cuenta está al día.
              </p>
            </div>
          ) : (
            <>
              <div className="w-full lg:w-1/2">
                <InvoicesList selectedInvoice={selectedInvoice} />
              </div>

              <div className="w-full lg:w-1/2">
                <PaymentInformation
                  selectedInvoice={selectedInvoice}
                  netAmount={netAmount}
                  iva={iva}
                  totalAmount={totalAmount}
                />
                <div id="wallet_container" className="mb-12 mt-8" />
              </div>
            </>
          )}
        </div>
        {data && data.pendingFacturas && data.pendingFacturas.length > 0 && (
          <div className="mt-8 rounded-md border bg-gray-50 p-6">
            <p className="font-hanken text-sm leading-6 text-gray-700">
              También puedes pagar tus facturas mediante transferencia
              electrónica a nombre de Urbex SpA, RUT Nº 77.744.991-5, a la
              cuenta corriente Nº 00-847-03225-06 del Banco de Chile. Por favor,
              envía el comprobante al correo electrónico
              contacto@homespotter.app.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
