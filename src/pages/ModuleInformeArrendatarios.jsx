import React from "react";
import Header from "../components/ModuleComponents/Header";
import Description from "../components/ModuleComponents/Description";
import Features from "../components/ModuleComponents/Features";
import CallToAction from "../components/ModuleComponents/CallToAction";
import Products from "../components/Products";

export const ModuleInformeArrendatarios = () => (
  <div>
    <Header
      category="Informes"
      name="Informe Arrendatarios"
      icon="/icons/informe_comercial.svg"
    />
    <Description
      title="Analiza a un postulante a arrendatario."
      description="¿No tienes claro el perfil de tu postulante o necesitas entender su comportamiento comercial? Este informe detallado te proporcionará un poderoso análisis con información sobre deudas, score crediticio, causas judiciales, activos y más. En caso de compañías podrás revisar los tramos de ventas, cantidad de trabajadores, actividades económicas, etc. Comparte el informe customizado con tu logo a tus clientes."
      video="/assets/comercial_mockup.json"
      pdfUrl="/assets/tenant-report-example.pdf"
    />
    <Features
      features={[
        "Razón Social",
        "RUT",
        "Actividades económicas",
        "Dirección comercial (Empresa)",
        "Tipo de compañía (Empresa)",
        "Industria (Empresa)",
        "Año fundación (Empresa)",
        "Tramo de ventas (Empresa)",
        "Cantidad de trabajadores (Empresa)",
        "Socios (Empresa)",
        "Score Financiero",
        "Deudas informadas CMF",
        "Activos y avalúos (Propiedades y vehículos)",
        "Dirección del Trabajo (Multas y Moras Previsionales)",
        "Causas civiles, laborales y penales",
        "Boletines",
        "Informe PDF con tu logo",
        "Comparte el informe con quien quieras",
      ]}
    />
    <Products />
    <CallToAction />
  </div>
);
