import React from "react";

export default function URBXDisclaimer() {
  return (
    <div className="bg-gray-100/60 pb-24 text-center">
      <h2 className="mb-4 font-hanken text-xs text-gray-600">
        Somos una startup de:
      </h2>
      <a href="https://urbx.io" target="_blank" rel="noopener noreferrer">
        <img
          src="/assets/URBXLogo.svg"
          alt="URBX"
          className="mx-auto w-36" // "mx-auto" asegura que el logo esté centrado horizontalmente
        />
      </a>
    </div>
  );
}