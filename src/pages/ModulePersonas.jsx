import React from "react";
import Header from "../components/ModuleComponents/Header";
import Description from "../components/ModuleComponents/Description";
import Features from "../components/ModuleComponents/Features";
import CallToAction from "../components/ModuleComponents/CallToAction";
import Products from "../components/Products";

export const ModulePersonas = () => (
  <div>
    <Header category="Búsquedas" name="Personas" icon="/icons/personas.svg" />
    <Description
      title="Información de empresas y personas naturales al alcance de tu mano."
      description="Obtén información detallada sobre una persona o empresa, incluyendo sus propiedades y sociedades. Accede a correos electrónicos y números de teléfono para posibles contactos."
      video="/assets/personas_mockup.json"
    />
    <Features
      features={[
        "Nombre completo",
        "RUT",
        "Correos",
        "Teléfonos",
        "Propiedades",
        "Sociedades",
      ]}
    />
    <Products />
    <CallToAction />
  </div>
);
