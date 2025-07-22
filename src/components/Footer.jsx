import React from "react";
import StatusTag from "./StatusTag";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center p-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center font-hanken text-sm leading-6 text-gray-700">
          © {currentYear} All Rights Reserved - 🏠 HomeSpotter.app{" "}
          <span className="ml-2">
            <StatusTag />
          </span>
        </p>
      </div>
    </footer>
  );
}
