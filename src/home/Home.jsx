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
      <title>Vüox</title>
      <meta
        name="description"
        content="Tours virtuales con tecnología Matterport."
      />
      <meta
        name="keywords"
        content="tour virtual, video, plano 3d, plano 2d, foto 4k, matterport, propiedades, visualizador, realidad aumentada, vuox, vüox"
      />
      <meta
        property="og:title"
        content="Vüox"
      />
      <meta
        property="og:description"
        content="Tours virtuales con tecnología Matterport."
      />
      <meta property="og:image" content="/assets/logo_hs.png" />
      <meta property="og:url" content="https://www.homespotter.app" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Vüox"
      />
      <meta
        name="twitter:description"
        content="Tours virtuales con tecnología Matterport."
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
