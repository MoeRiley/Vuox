// src/general/ProductsConfig.js
import { RoutePaths } from "./RoutePaths";

// Configuración completa de productos
export const PRODUCTS_CONFIG = [
  {
    category: "Búsquedas",
    items: [
      {
        id: "personas",
        name: "Personas",
        description:
          "Información de personas, contactabilidad, propiedades, sociedades, etc.",
        href: RoutePaths.MODPERSONAS,
        route: "/product/personas/",
        icon: "/icons/personas.svg",
        mockup: "/assets/personas_mockup.json",
        available: true,
      },
      {
        id: "propiedades",
        name: "Propiedades",
        description:
          "Información de propietario, contactabilidad, datos catastrales, información de mercado, etc.",
        href: RoutePaths.MODPROPIEDADES,
        route: "/product/propiedades/",
        icon: "/icons/propiedades.svg",
        mockup: "/assets/propiedades_mockup.json",
        available: true,
      },
    ],
  },
  {
    category: "Informes",
    items: [
      {
        id: "informeValorizacion",
        name: "Informe Valorización",
        description:
          "Informe extenso de valorización de una propiedad, con referencias del CBR y mercado actual.",
        href: RoutePaths.MODINFVALORIZACION,
        route: "/product/informe-valorizacion/",
        icon: "/icons/informe_valorizacion.svg",
        mockup: "/assets/valorizacion_mockup.json",
        available: true,
      },
      {
        id: "informeArrendatarios",
        name: "Informe Arrendatarios",
        description:
          "Informe comercial completo de una persona en particular, con deudas, causas, score financiero, etc.",
        href: RoutePaths.MODINFARRENDATARIOS,
        route: "/product/informe-arrendatarios/",
        icon: "/icons/informe_comercial.svg",
        mockup: "/assets/comercial_mockup.json",
        available: true,
      },
    ],
  },
  {
    category: "Live Data",
    items: [
      {
        id: "insights",
        name: "Insights",
        description:
          "Información de mercado a partir de un polígono, top brokers del área, valor metro cuadrado, media de publicación, etc.",
        href: RoutePaths.MODINSIGHTS,
        route: "/product/insights/",
        icon: "/icons/insights.svg",
        mockup: "/assets/insights_mockup.json",
        available: true,
      },
      {
        id: "geoscope",
        name: "GeoScope",
        description:
          "Mapa Interactivo de todo Chile para explorar de manera visualmente fácil detalles de predios, propiedades, etc.",
        href: RoutePaths.MODGEOSCOPE,
        route: "/product/geoscope/",
        icon: "/icons/geoscope.svg",
        mockup: "/assets/geoscope_mockup.json", // Asumiendo que existe o se creará
        available: false, // No disponible aún
      },
      {
        id: "harry",
        name: "Harry IA",
        description:
          "Inteligencia Artifical experta en temas relevantes inmobiliarios, leyes, planes reguladores, mercado, operaciones, etc.",
        href: RoutePaths.MODHARRY,
        route: "/product/harry-ia/",
        icon: "/icons/harry.svg",
        mockup: "/assets/harry_mockup.json", // Asumiendo que existe o se creará
        available: false, // No disponible aún
      },
    ],
  },
];

// Versión formateada para compatibilidad con el componente Products.jsx actual
export const getProductsDataFormatted = () => {
  const formatted = {};

  PRODUCTS_CONFIG.forEach((category) => {
    formatted[category.category] = category.items.map((item) => ({
      name: item.name,
      description: item.description,
      icon: item.icon,
      mockup: item.mockup,
      route: item.route,
      available: item.available,
    }));
  });

  return formatted;
};
