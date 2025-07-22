import React from "react";
import Header from "../components/ModuleComponents/Header";
import Description from "../components/ModuleComponents/Description";
import Features from "../components/ModuleComponents/Features";
import CallToAction from "../components/ModuleComponents/CallToAction";
import Products from "../components/Products";

export const ModulePropiedades = () => (
  <div>
    <Header
      category="Búsquedas"
      name="Propiedades"
      icon="/icons/propiedades.svg"
    />
    <Description
      title="Toda la información de una propiedad a partir de un rol o dirección."
      description="Información catastral, detalles del propietario y su contactabilidad, mapas e imágenes. Extensa información del CBR relevante al historial, evolución del valor del metro cuadrado y ventas de propiedades similares. Por último, el plan regulador comunal."
      video="/assets/propiedades_mockup.json"
    />
    <Features
      features={[
        "Avalúo fiscal",
        "Mapa de referencia",
        "Imágen de Google Street View",
        "Datos propietario",
        "Contactabilidad propietario",
        "ROL",
        "Contribuciones",
        "Evolución m² del sector",
        "Historial de ventas de la propiedad",
        "Listado CBR propiedades similares",
        "Plan Regulador Comunal",
      ]}
    />
    <Products />
    <CallToAction />
  </div>
);
