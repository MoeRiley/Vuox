import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Features({ features }) {
  return (
    <div className="relative bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:px-8">
          <h3 className="sm:text-4.5xl mb-16 text-center font-hanken text-4xl font-normal tracking-tight text-gray-700">
            Características
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex w-full items-center space-x-4 rounded-md bg-white p-4 shadow-md"
              >
                <CheckCircleIcon className="h-8 w-8 flex-shrink-0 text-red-500" />
                <span className="text-md min-w-[150px] truncate font-hanken text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
