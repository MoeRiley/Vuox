import React from "react";
import { CreditCardIcon } from "@heroicons/react/24/outline";

export default function PaymentInformation({
  selectedInvoice,
  netAmount,
  iva,
  totalAmount,
}) {
  return (
    <div className="space-y-4 rounded-md border bg-gray-50 px-6 py-4">
      <div className="flex items-center">
        <CreditCardIcon className="mr-2 h-6 w-6 text-gray-700" />
        <h2 className="font-hanken text-lg font-bold text-gray-700">
          Información del Pago
        </h2>
      </div>
      <hr className="my-4" />
      {selectedInvoice ? (
        <div className="flex justify-between">
          <h3 className="font-hanken text-sm text-gray-700">
            {selectedInvoice.month} {selectedInvoice.year}
          </h3>
          <h3 className="font-hanken text-sm text-gray-700">
            {selectedInvoice.invoiceTotalCLP.toLocaleString("es-CL", {
              style: "currency",
              currency: "CLP",
            })}
          </h3>
        </div>
      ) : (
        <p className="text-gray-700">No hay factura seleccionada.</p>
      )}

      <hr className="my-4" />
      <div className="flex justify-between">
        <h3 className="font-hanken text-sm font-bold text-gray-700">
          Monto Neto
        </h3>
        <h3 className="font-hanken text-sm font-bold text-gray-700">
          {netAmount.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </h3>
      </div>
      <div className="flex justify-between">
        <h3 className="font-hanken text-sm font-bold text-gray-700">IVA</h3>
        <h3 className="font-hanken text-sm font-bold text-gray-700">
          {iva.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </h3>
      </div>
      <div className="flex justify-between">
        <h3 className="font-hanken text-sm font-bold text-gray-700">
          Monto Total
        </h3>
        <h3 className="font-hanken text-sm font-bold text-gray-700">
          {totalAmount.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP",
          })}
        </h3>
      </div>
    </div>
  );
}
