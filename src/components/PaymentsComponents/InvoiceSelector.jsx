import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function InvoiceSelector({ invoices, onInvoiceSelect }) {
  const [selectedInvoice, setSelectedInvoice] = useState(invoices[0] || null); // No establecer la selección inicial aquí

  const handleSelectChange = (selected) => {
    setSelectedInvoice(selected);
    onInvoiceSelect(selected);
  };

  if (!selectedInvoice) {
    return null; // O mostrar un mensaje indicando que no hay facturas
  }

  return (
    <Listbox value={selectedInvoice} onChange={handleSelectChange}>
      <div className="relative mt-2">
        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm sm:leading-6">
          <span className="block truncate font-hanken">
            {`${selectedInvoice.month} ${selectedInvoice.year} - Plan HomeSpotter - Facturación Mínima UF ${selectedInvoice.basePlan}`}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>

        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {invoices.map((invoice, index) => (
            <Listbox.Option
              key={index}
              value={invoice}
              className={({ active, selected }) =>
                `relative cursor-default select-none py-2 pl-8 pr-4 ${
                  active ? "bg-red-500 text-white" : "text-gray-700"
                } ${
                  selected
                    ? "font-hanken font-semibold"
                    : "font-hanken font-normal"
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected
                        ? "font-hanken font-semibold"
                        : "font-hanken font-normal"
                    }`}
                  >
                    {`${invoice.month} ${invoice.year} - Plan HomeSpotter - Facturación Mínima UF ${invoice.basePlan}`}
                  </span>
                  {selected && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-white">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}
