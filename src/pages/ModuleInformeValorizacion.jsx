import React from "react";
import Header from "../components/ModuleComponents/Header";
import Description from "../components/ModuleComponents/Description";
import Features from "../components/ModuleComponents/Features";
import CallToAction from "../components/ModuleComponents/CallToAction";
import Products from "../components/Products";

export const ModuleInformeValorizacion = () => (
  <div>
    <Header
      category="Informes"
      name="Informe Valorización"
      icon="/icons/informe_valorizacion.svg"
    />
    <Description
      title="Obtén un valor certero de una propiedad."
      description="Este informe te proporcionará un valor adecuado de venta o arriendo de una propiedad en particular, considerando una amplia cantidad de referencias similares, tanto del registro del Conservador de Bienes Raíces como de la oferta actual en portales inmobiliarios. Comparte el informe customizado con tu logo a tus clientes."
      video="/assets/valorizacion_mockup.json"
      pdfUrl="/assets/appraisal-example.pdf"
    />
    <Features
      features={[
        "Valor estimado (UF y CLP)",
        "Avalúo fiscal",
        "Mapa de referencia",
        "Imágen de Google Street View",
        "ROL",
        "Contribuciones",
        "Evolución m² del sector",
        "Historial de ventas de la propiedad",
        "Listado CBR propiedades similares",
        "Listado portales propiedades similares",
        "Plan Regulador Comunal",
        "Capacidad de edición de informe",
        "Construcciones adicionales",
        "Informe PDF con tu logo",
        "Comparte el informe con quien quieras",
      ]}
    />
    <Products />
    <CallToAction />
  </div>
);
