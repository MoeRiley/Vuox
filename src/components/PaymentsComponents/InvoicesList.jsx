import React, { useState } from "react";
import { DocumentIcon, ReceiptPercentIcon } from "@heroicons/react/24/outline";

function ModuleDetailsTooltip({ invoice, position }) {
  const formatValue = (value) =>
    value !== undefined && value !== null
      ? parseFloat(value).toFixed(3)
      : "0.000";

  return (
    <div
      className="fixed z-50 rounded bg-gray-800 p-2 text-xs text-white shadow-lg"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        maxWidth: "250px",
        minWidth: "200px",
      }}
    >
      <div className="mb-1 font-semibold">Detalles de módulos:</div>
      {invoice.moduleAppraisalsMonthlyPrice > 0 && (
        <div>
          • Appraisals: UF {formatValue(invoice.moduleAppraisalsMonthlyPrice)}
        </div>
      )}
      {invoice.moduleInsightsMonthlyPrice > 0 && (
        <div>
          • Insights: UF {formatValue(invoice.moduleInsightsMonthlyPrice)}
        </div>
      )}
      {invoice.moduleTenantsMonthlyPrice > 0 && (
        <div>
          • Tenants: UF {formatValue(invoice.moduleTenantsMonthlyPrice)}
        </div>
      )}
      {invoice.moduleHarryMonthlyPrice > 0 && (
        <div>• Harry IA: UF {formatValue(invoice.moduleHarryMonthlyPrice)}</div>
      )}
      {invoice.moduleGeoScopeMonthlyPrice > 0 && (
        <div>
          • GeoScope: UF {formatValue(invoice.moduleGeoScopeMonthlyPrice)}
        </div>
      )}
      <div className="mt-1 border-t border-gray-600 pt-1">
        Total: UF {formatValue(invoice.totalModulesUF)}
      </div>
    </div>
  );
}

export default function InvoicesList({ selectedInvoice }) {
  const [tooltipInfo, setTooltipInfo] = useState({
    visible: false,
    position: { x: 0, y: 0 },
  });

  const formatCurrency = (value) => {
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const formatUF = (value) => {
    // Formatea el número a 4 decimales y reemplaza el punto por coma
    return value.toFixed(4).replace(".", ",");
  };

  const openInvoice = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  const showTooltip = (e) => {
    // Ajustamos la posición del tooltip
    setTooltipInfo({
      visible: true,
      position: { x: e.clientX + 15, y: e.clientY - 80 },
    });
  };

  const hideTooltip = () => {
    setTooltipInfo({
      visible: false,
      position: { x: 0, y: 0 },
    });
  };

  return (
    <div className="relative rounded-md bg-white px-6 py-4 pb-12 shadow-md">
      <ul role="list" className="space-y-3">
        {selectedInvoice && (
          <li key={selectedInvoice.id} className="space-y-4 overflow-hidden">
            {/* Encabezado */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <label
                  htmlFor={`invoice-${selectedInvoice.id}`}
                  className="font-hanken text-lg font-bold text-gray-700"
                >
                  {selectedInvoice.month} {selectedInvoice.year}
                </label>
              </div>
              <div className="flex items-center">
                <div
                  onClick={() => openInvoice(selectedInvoice.invoiceUrl)}
                  className={`flex cursor-pointer items-center rounded-md border px-2 py-1 ${
                    selectedInvoice.invoiceUrl
                      ? "border-green-500 bg-green-50 text-green-500"
                      : "border-gray-400 bg-white text-gray-400"
                  }`}
                  title="Ver Factura"
                >
                  <DocumentIcon className="mr-1 h-4 w-4" />
                  <span className="font-hanken text-xs">Ver Factura</span>
                </div>
              </div>
            </div>

            <hr className="my-4" />

            {/* Facturación Mínima */}
            <div className="flex items-center justify-between">
              <div className="font-hanken text-sm text-gray-600">
                Facturación Mínima:
              </div>
              <div className="font-hanken text-sm text-gray-600">
                UF {formatUF(selectedInvoice.basePlan)}
              </div>
            </div>

            <hr className="my-4" />

            {/* Sobreconsumo */}
            <div className="flex items-center justify-between">
              <div className="font-hanken text-sm text-gray-600">
                Sobreconsumo:
              </div>
              <div className="font-hanken text-sm text-gray-600">
                UF {formatUF(selectedInvoice.overConsumption)}
              </div>
            </div>

            <hr className="my-4" />

            {/* Adicionales */}
            <div className="flex items-center justify-between">
              <div className="flex items-center font-hanken text-sm text-gray-600">
                <span>Adicionales:</span>
                {selectedInvoice.totalModulesUF > 0 && (
                  <div
                    className="ml-2 flex items-center justify-center"
                    title="Ver detalles de módulos"
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                  >
                    <ReceiptPercentIcon className="h-4 w-4 text-red-500" />
                  </div>
                )}
              </div>
              <div className="font-hanken text-sm text-gray-600">
                UF {formatUF(selectedInvoice.totalModulesUF)}
              </div>
            </div>

            <hr className="my-4" />

            {/* Subtotal UF */}
            <div className="flex items-center justify-between">
              <div className="font-hanken text-sm text-gray-600">
                Subtotal UF:
              </div>
              <div className="font-hanken text-sm text-gray-600">
                UF {formatUF(selectedInvoice.invoiceUF)}
              </div>
            </div>

            <hr className="my-4" />

            {/* Valor de la UF para el día */}
            <div className="flex items-center justify-between">
              <div className="font-hanken text-sm text-gray-600">
                UF ({selectedInvoice.dayUF}):
              </div>
              <div className="font-hanken text-sm text-gray-600">
                {parseFloat(selectedInvoice.dayUFValue).toLocaleString(
                  "es-CL",
                  {
                    style: "currency",
                    currency: "CLP",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }
                )}
              </div>
            </div>

            <hr className="my-4" />

            {/* Subtotal CLP */}
            <div className="flex items-center justify-between">
              <div className="flex items-center font-hanken text-sm font-bold text-gray-700">
                Subtotal CLP:
              </div>
              <div className="flex items-center font-hanken text-sm font-bold text-gray-700">
                {formatCurrency(selectedInvoice.invoiceTotalCLP)}
              </div>
            </div>
          </li>
        )}
      </ul>
      {/* Renderizado del tooltip */}
      {tooltipInfo.visible && (
        <ModuleDetailsTooltip
          invoice={selectedInvoice}
          position={tooltipInfo.position}
        />
      )}
    </div>
  );
}
