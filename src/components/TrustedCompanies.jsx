import React, { useEffect, useState } from "react";

// Datos JSON con las rutas de las imágenes
const logosData = {
  logos: [
    "/assets/trustedcompanies/casal.png",
    "/assets/trustedcompanies/gps.png",
    "/assets/trustedcompanies/engel.png",
    "/assets/trustedcompanies/vsre.png",
    "/assets/trustedcompanies/bdo.png",
    "/assets/trustedcompanies/norteverde.png",
    "/assets/trustedcompanies/newmark.png",
    "/assets/trustedcompanies/alaluf.png",
    "/assets/trustedcompanies/recorp.png",
    "/assets/trustedcompanies/diagonal2.png",
  ],
};

export default function TrustedCompanies() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    setLogos(logosData.logos);
  }, []);

  return (
    <div className="trusted-companies-container">
      <h3 className="text-center font-hanken text-sm tracking-tight text-gray-700 sm:text-left">
        Somos la opción favorita de las{" "}
        <span className="font-semibold">mejores compañías</span>
      </h3>
      <div className="logos-container mx-auto mt-2 sm:mx-0">
        <div className="logos-loop">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="logo-wrapper">
              <img src={logo} alt={`Logo ${index}`} className="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
