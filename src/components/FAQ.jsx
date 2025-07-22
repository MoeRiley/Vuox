/* eslint-disable react-refresh/only-export-components */

import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Qué es HomeSpotter?",
    answer:
      "HomeSpotter es una herramienta potente que proporciona información valiosa para operaciones diarias, como informes de valorización, datos del mercado inmobiliario, características de activos, detalles catastrales, contactabilidad de propietarios, y planes reguladores comunales, entre otros.",
  },
  {
    question: "¿Para quién está dirigido HomeSpotter?",
    answer:
      "HomeSpotter está diseñado para compañías y personas naturales que buscan información sobre propiedades, propietarios y arrendatarios. Es ideal para corredores de propiedades, inmobiliarias, portales de propiedades y cualquier persona que tome decisiones de compra o venta de inmuebles.",
  },
  {
    question: "¿Qué zonas cubre HomeSpotter?",
    answer:
      "HomeSpotter cubre todo el territorio nacional con una alta cantidad y calidad de datos.",
  },
  {
    question: "¿De dónde obtiene la información HomeSpotter?",
    answer:
      "HomeSpotter obtiene información de diversas fuentes, como el Servicio de Impuestos Internos, Conservadores de Bienes Raíces, planes reguladores y muchas otras, garantizando resultados precisos.",
  },
  {
    question: "¿Es posible integrarse?",
    answer:
      "Sí, ofrecemos una API simple para que los usuarios puedan integrar nuestra información en sus propias plataformas.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-gray-100/60">
      <div className="mx-auto max-w-7xl px-6 py-36">
        <div className="mx-auto divide-y divide-gray-900/10">
          <h2 className="font-hanken text-2xl font-bold leading-10 tracking-tight text-gray-700">
            Preguntas Frecuentes
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-700">
                        <span className="font-hanken leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
