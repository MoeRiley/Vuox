import React from "react";
import Header from "../components/ModuleComponents/Header";
import Description from "../components/ModuleComponents/Description";
import Features from "../components/ModuleComponents/Features";
import CallToAction from "../components/ModuleComponents/CallToAction";
import Products from "../components/Products";

export const ModuleInsights = () => (
  <div>
    <Header category="Live Data" name="Insights" icon="/icons/insights.svg" />
    <Description
      title="Descubre la información de un barrio determinado."
      description="En este módulo podrás entender en profundidad la oferta actual de un barrio determinado. Sólo debes marcar un polígono de interés, y nuestro software te entregará información acerca de la cantidad de activos en oferta, sus valores y un listado de los mejores brokers de la zona."
      video="/assets/insights_mockup.json"
    />
    <Features
      features={[
        "Polígono específico",
        "Gráficos consolidados",
        "Cantidad de propiedades",
        "Filtrado por tipo y operación",
        "Top Brokers",
        "Valor m² de la zona",
        "Valor de propiedades publicadas",
      ]}
    />
    <Products />
    <CallToAction />
  </div>
);
