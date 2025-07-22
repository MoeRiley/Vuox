import React from "react";
import { Helmet } from "react-helmet";
import HeroSection from "../components/HeroSection";
import FAQ from "../components/FAQ";
import HeroCode from "../components/HeroCode";
import UISection from "../components/UISection";
import Products from "../components/Products";
import URBXDisclaimer from "../components/URBXDisclaimer";

export const Home = () => (
  <>
    <Helmet>
      <title>HomeSpotter - Tu Copiloto Inmobiliario</title>
      <meta
        name="description"
        content="Data inmobiliaria a tu alcance. Obtén informes de valorización, arrendatarios, información sobre propiedades, etc."
      />
      <meta
        name="keywords"
        content="data inmobiliaria, inmobiliaria, informes de valorización, arrendatarios, propiedades, mercado inmobiliario, HomeSpotter"
      />
      <meta
        property="og:title"
        content="HomeSpotter - Tu Copiloto Inmobiliario"
      />
      <meta
        property="og:description"
        content="Data inmobiliaria a tu alcance. Obtén informes de valorización, arrendatarios, información sobre propiedades, etc."
      />
      <meta property="og:image" content="/assets/logo_hs.png" />
      <meta property="og:url" content="https://www.homespotter.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="HomeSpotter - Tu Copiloto Inmobiliario"
      />
      <meta
        name="twitter:description"
        content="Data inmobiliaria a tu alcance. Obtén informes de valorización, arrendatarios, información sobre propiedades, etc."
      />
      <meta name="twitter:image" content="/assets/logo_hs.png" />
    </Helmet>
    <div>
      <HeroSection />
      <Products />
      <HeroCode />
      <UISection />
      <FAQ />
      <URBXDisclaimer />
    </div>
  </>
);
