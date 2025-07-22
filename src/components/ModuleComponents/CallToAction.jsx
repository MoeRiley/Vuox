import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src="/assets/wallpaperlogin.jpg"
        alt=""
        className="absolute h-full w-full object-cover object-right md:object-center"
      />
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <div className="mx-auto max-w-7xl py-12">
          <div className="flex flex-col items-center">
            <div className="mx-auto text-center">
              <Link to="/demo">
                <button className="font-hanken text-md font-semibold tracking-tight text-white hover:text-red-500 sm:my-0 sm:text-3xl">
                  ¿Te interesa agendar una demostración?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
