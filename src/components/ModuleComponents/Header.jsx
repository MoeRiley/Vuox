import React from "react";

export default function Header({ category, name, icon }) {
  return (
    <div className="relative w-full space-y-10 bg-gray-100/50 xl:space-y-16">
      <img
        src="/assets/01.jpg"
        alt=""
        className="object-fit absolute h-full w-full opacity-5 md:object-center"
      />
      <div className="flex flex-col items-center space-y-4 py-12 text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <img src={icon} alt={`${name} icon`} className="h-32 w-32" />
          </div>
          <h1 className="font-hanken text-3xl font-semibold text-gray-700 sm:text-4xl md:text-5xl lg:text-4xl">
            {name}
          </h1>
          <p className="inline-block rounded-full bg-red-100 px-4 py-2 font-hanken text-xs font-semibold text-red-500">
            {category}
          </p>
        </div>
      </div>
    </div>
  );
}
