import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import TrustedCompanies from "./TrustedCompanies";

const phrases = [
  "relaciones con clientes.",
  "nuevas captaciones.",
  "activos inmobiliarios.",
  "estrategias corporativas.",
];

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const typingSpeed = isErasing ? 50 : 50;

    const handleTyping = () => {
      if (isErasing) {
        if (charIndex > 0) {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsErasing(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      } else {
        if (charIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsErasing(true), 1500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isErasing, currentPhrase]);

  useEffect(() => {
    setCurrentPhrase(phrases[textIndex]);
  }, [textIndex]);

  useEffect(() => {
    // Cargar el archivo JSON desde la carpeta public
    fetch("/assets/animated_mockup_2.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error)
      );
  }, []);

  return (
    <div className="relative isolate flex min-h-[85vh] items-start overflow-hidden bg-gray-100/50 py-12 sm:py-16 lg:py-24">
      <img
        src="/assets/01.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-5 md:object-center"
      />
      <div className="mx-auto h-full w-full max-w-7xl">
        <div className="mt-16 flex h-full flex-wrap">
          <div className="mb-8 flex w-full flex-col justify-start px-6 lg:mb-0 lg:w-5/12 lg:pr-12">
            <div className="mx-auto max-w-lg text-center sm:text-left lg:max-w-none">
              <img
                className="mx-auto h-11 sm:mx-0"
                src="/FAVICON.svg"
                alt="homespotter"
              />
              <div className="h-56 sm:h-48">
                <h2 className="sm:text-4.5xl mt-10 font-hanken text-4xl font-semibold tracking-tight text-gray-700">
                  Somos tu partner de información para potenciar tus{" "}
                  <span className="typing-effect text-red-500">
                    {displayedText}
                  </span>
                </h2>
              </div>
              <div className="hidden flex-col items-center gap-x-6 sm:flex sm:flex-row sm:justify-start">
                <a
                  href="/demo"
                  className="rounded-md bg-red-500 px-4 py-2 font-hanken text-sm font-semibold text-white shadow-sm hover:bg-red-600"
                >
                  ¡Agenda tu Demo!
                </a>
                <a
                  href="https://api.homespotter.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-hanken text-sm font-semibold leading-6 text-gray-600 hover:text-red-500"
                >
                  Ver Documentación{" "}
                  <ArrowRightIcon className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <div className="sm:mt-14">
                <TrustedCompanies />
              </div>
            </div>
          </div>
          <div className="-mt-24 flex w-full items-center justify-center overflow-hidden px-6 sm:mt-0 lg:w-7/12">
            <div className="relative -mb-2 mt-24 flex items-center justify-center sm:mt-8">
              {animationData && (
                <Lottie
                  animationData={animationData}
                  loop
                  className="h-auto w-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="mb-12 mt-20 flex w-full flex-col items-center justify-center gap-y-4 sm:hidden sm:flex-row sm:gap-x-6">
            <a
              href="/demo"
              className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ¡Comienza Ya!
            </a>
            <a
              href="https://api.homespotter.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-gray-600 hover:text-gray-800"
            >
              Ver Documentación <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
