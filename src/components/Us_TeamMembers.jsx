import React from "react";
import { getTeamMembersSorted } from "../general/TeamConfig";

const Us_TeamMembers = () => {
  const teamMembers = getTeamMembersSorted();

  return (
    <div className="relative isolate flex items-start overflow-hidden bg-white py-36">
      <div className="mx-auto h-full w-full max-w-7xl sm:px-2">
        {/* Sección del Equipo */}
        <div className="px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-3 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group flex flex-col items-center text-center"
              >
                {/* Contenedor de la imagen con posición relativa para posicionar el icono */}
                <div className="relative mb-5">
                  {/* Imagen redonda del miembro con animación */}
                  <div className="h-36 w-36 transform overflow-hidden rounded-full bg-gray-200 shadow-md transition-all duration-300 ease-in-out group-hover:rotate-3 group-hover:scale-110">
                    <img
                      src={member.profileImg}
                      alt={member.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/300x300?text=Profile+Image";
                      }}
                    />
                  </div>

                  {/* Icono de LinkedIn superpuesto con animación */}
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-1 -right-1 flex h-8 w-8 transform items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 hover:rotate-12 hover:scale-125 hover:bg-red-50"
                    aria-label="LinkedIn profile"
                  >
                    {/* SVG ajustado con viewBox específico y sin padding */}
                    <svg
                      className="h-3 w-3 text-red-500 transition-all duration-300 hover:text-red-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </a>
                </div>

                {/* Información del miembro con animación sutil */}
                <div className="mt-1 transform transition-all duration-300 group-hover:translate-y-1">
                  <h4 className="font-hanken text-xl font-semibold text-gray-700 transition-colors group-hover:text-red-500">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-sm text-gray-600">{member.cargo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us_TeamMembers;
