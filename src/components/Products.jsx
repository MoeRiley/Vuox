import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import { getProductsDataFormatted } from "../general/ProductsConfig";
import ComingSoonTag from "./ComingSoonTag";

export default function Products() {
  // Usar el método de formateo para mantener compatibilidad con la estructura original
  const productsData = getProductsDataFormatted();
  const categories = Object.keys(productsData);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedProduct, setSelectedProduct] = useState(
    productsData[selectedCategory][0]
  );
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Cargar el archivo JSON desde la carpeta public
    if (selectedProduct.mockup) {
      fetch(selectedProduct.mockup)
        .then((response) => response.json())
        .then((data) => setAnimationData(data))
        .catch((error) =>
          console.error("Error loading Lottie animation:", error)
        );
    }
  }, [selectedProduct.mockup]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(productsData[category][0]);
  };

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    if (product.mockup) {
      fetch(product.mockup)
        .then((response) => response.json())
        .then((data) => setAnimationData(data))
        .catch((error) =>
          console.error("Error loading Lottie animation:", error)
        );
    }
  };

  return (
    <div className="relative isolate flex min-h-[85vh] items-start overflow-hidden bg-white py-12 sm:py-16 lg:py-24">
      <img
        src=""
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-5 md:object-center"
      />
      <div className="mx-auto h-full w-full max-w-7xl sm:px-2">
        <h3 className="sm:text-4.5xl mt-10 text-center font-hanken text-4xl font-normal tracking-tight text-gray-700">
          Nuestros Productos
        </h3>
        <div className="mt-12 flex justify-center">
          <div className="flex rounded-full border border-gray-200 bg-gray-50 p-1.5">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-full px-6 py-2 font-hanken text-xs transition-all ${
                  selectedCategory === category
                    ? "bg-red-500 text-white"
                    : "text-gray-600"
                } ${selectedCategory === category ? "animate-fade-in" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-16 flex h-full flex-wrap">
          <div className="mb-8 flex w-full flex-col justify-start px-6 lg:mb-0 lg:w-5/12 lg:pr-12">
            <div className="flex flex-col gap-4">
              {productsData[selectedCategory].map((product) => (
                <div
                  key={product.name}
                  className={`${
                    product.available
                      ? "cursor-pointer"
                      : "cursor-default opacity-80"
                  } rounded-3xl p-6 ${
                    selectedProduct.name === product.name
                      ? "border border-gray-200 bg-gray-50"
                      : "border border-white bg-none"
                  }`}
                  onClick={() =>
                    product.available && handleProductChange(product)
                  }
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.icon}
                      className="h-10 w-10"
                      alt={`${product.name} icon`}
                    />
                    <div className="flex items-center gap-2">
                      <h3 className="font-hanken text-lg font-semibold text-gray-700">
                        {product.name}
                      </h3>
                      {!product.available && <ComingSoonTag />}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col items-center justify-center rounded-3xl px-6 lg:mt-0 lg:w-7/12">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop
                className="rounded-md object-cover"
              />
            )}
            <div className="mt-12 flex flex-col items-center gap-4">
              {selectedProduct.available !== false ? (
                <NavLink
                  to={selectedProduct.route}
                  className="rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Más Información
                </NavLink>
              ) : (
                <button
                  className="cursor-default rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-white shadow-sm"
                  disabled
                >
                  Próximamente
                </button>
              )}
            </div>
            <div className="mt-12 flex gap-4">
              {productsData[selectedCategory].map((product, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${
                    selectedProduct.name === product.name
                      ? "bg-red-500 ring-4 ring-red-100"
                      : product.available
                      ? "bg-gray-300"
                      : "bg-gray-100 opacity-50"
                  }`}
                  onClick={() =>
                    product.available && handleProductChange(product)
                  }
                  disabled={!product.available}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
