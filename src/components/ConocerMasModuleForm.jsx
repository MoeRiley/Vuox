import React, { useState } from "react";
import send_quote from "../api/send_quote";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import AlertSuccess from "./AlertSuccess";
import AlertError from "./AlertError";
import { BeatLoader } from "react-spinners";

export default function ConocerMasModuleForm() {
  const [isCompany, setIsCompany] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState({
    show: false,
    title: "",
    description: "",
  });
  const [alertError, setAlertError] = useState({
    show: false,
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const entityTypeOptions = [
    { value: "individual", label: "Persona Natural" },
    { value: "company", label: "Empresa" },
  ];

  const [selectedEntityType, setSelectedEntityType] = useState(
    entityTypeOptions[0]
  );

  const resetForm = () => {
    document.getElementById("contact-form").reset();
    setIsCompany(false);
    setSelectedEntityType(entityTypeOptions[0]);
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!firstName || !lastName || !email || !phone) {
      setAlertError({
        show: true,
        title: "Error en el formulario",
        description: "Por favor, completa todos los campos requeridos.",
      });
      setIsLoading(false);
      return;
    }

    const formData = {
      name: firstName,
      lastName,
      email,
      telephone: phone,
      website: document.getElementById("company-website").value || "",
      type: selectedEntityType.value === "company" ? "Empresa" : "Persona",
      companyName:
        selectedEntityType.value === "company"
          ? document.getElementById("company-name").value
          : "",
      origin: "Inbound",
    };

    try {
      const response = await send_quote(formData);

      if (response.success) {
        resetForm();
        setAlertSuccess({
          show: true,
          title: "¡Formulario enviado con éxito!",
          description: "Tu solicitud ha sido procesada correctamente.",
        });
      } else {
        setAlertError({
          show: true,
          title: "Error en el envío",
          description:
            "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setAlertError({
        show: true,
        title: "Error en el envío",
        description:
          "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEntityTypeChange = (selected) => {
    setSelectedEntityType(selected);
    setIsCompany(selected.value === "company");
  };

  const handleCloseSuccessAlert = () => {
    setAlertSuccess((prevState) => ({
      ...prevState,
      show: false,
    }));
  };

  const handleCloseErrorAlert = () => {
    setAlertError((prevState) => ({
      ...prevState,
      show: false,
    }));
  };

  return (
    <div className="bg-white pb-16 pt-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="mt-24 flex flex-col gap-16 sm:gap-y-40 md:flex-row">
          <div className="md:mt-12 md:w-1/2 lg:ml-8">
            <h2 className="mb-12 w-80 divide-y font-hanken text-4xl font-semibold tracking-tight text-gray-700">
              Únete a <span className="text-red-500">HomeSpotter.</span>
            </h2>
            <img src="/assets/screenshot.png" className="shadow-md" alt="" />
          </div>
          <form
            id="contact-form"
            action="#"
            method="POST"
            className="mt-0 overflow-hidden bg-white p-8 shadow sm:rounded-lg md:mt-6 md:w-1/2 lg:mr-8"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block font-hanken text-sm font-semibold leading-6 text-gray-700"
                >
                  Nombre *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block font-hanken text-sm font-semibold leading-6 text-gray-700"
                >
                  Apellido *
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-hanken text-sm font-semibold leading-6 text-gray-700"
                >
                  Email *
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block font-hanken text-sm font-semibold leading-6 text-gray-700"
                >
                  Teléfono *
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    pattern="[0-9]*"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company-website"
                  className="block font-hanken text-sm font-semibold leading-6 text-gray-700"
                >
                  Sitio Web
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      http://
                    </span>
                    <input
                      type="text"
                      name="company-website"
                      id="company-website"
                      className="block flex-1 border-0 bg-transparent py-2.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="www.tuempresa.com"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="entity-type"
                  className="block font-hanken text-sm font-semibold leading-6 text-gray-700"
                >
                  ¿Quieres contratar como empresa o persona natural?
                </label>
                <div className="mt-2.5">
                  <Listbox
                    value={selectedEntityType}
                    onChange={handleEntityTypeChange}
                  >
                    <div className="relative">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm sm:leading-6">
                        <span className="block truncate font-hanken">
                          {selectedEntityType.label}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronUpDownIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {entityTypeOptions.map((option, index) => (
                          <Listbox.Option
                            key={index}
                            value={option}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                active
                                  ? "bg-red-500 text-white"
                                  : "text-gray-900"
                              }`
                            }
                          >
                            <span
                              className={`block truncate ${
                                selectedEntityType.value === option.value
                                  ? "font-semibold"
                                  : "font-normal"
                              }`}
                            >
                              {option.label}
                            </span>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  </Listbox>
                </div>
              </div>

              {isCompany && (
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nombre Empresa
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                      required={isCompany}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="mt-10">
              {!isLoading ? (
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="flex h-10 w-full items-center justify-center rounded-md bg-red-500 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  ¡Conversemos!
                </button>
              ) : (
                <div className="flex h-10 w-full items-center justify-center rounded-md bg-red-500">
                  <BeatLoader color="white" size={8} />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Alerta de Éxito */}
      <AlertSuccess
        title={alertSuccess.title}
        description={alertSuccess.description}
        show={alertSuccess.show}
        onClose={handleCloseSuccessAlert}
      />

      {/* Alerta de Error */}
      <AlertError
        title={alertError.title}
        description={alertError.description}
        show={alertError.show}
        onClose={handleCloseErrorAlert}
      />
    </div>
  );
}
