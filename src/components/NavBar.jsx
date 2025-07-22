import React, { useState, Fragment, useEffect } from "react";
import { Disclosure, Transition, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  ChevronDownIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths";
import { PRODUCTS_CONFIG } from "../general/ProductsConfig";
import ComingSoonTag from "./ComingSoonTag";

// Actualizar la navegación para incluir Nosotros
const navigation = [
  { name: "Inicio", path: RoutePaths.HOME },
  { name: "Documentación API", path: "https://api.homespotter.app" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  // Componente para renderizar un elemento de producto
  const ProductItem = ({ item, closePopover }) => {
    // Si el producto no está disponible, lo renderizamos como un div en lugar de un NavLink
    const Component = item.available ? NavLink : "div";

    return (
      <Component
        key={item.name}
        to={item.available ? item.href : undefined}
        className={`group flex rounded-lg p-3 ${
          item.available
            ? "cursor-pointer hover:bg-gray-50"
            : "cursor-default opacity-75"
        }`}
        onClick={
          item.available && closePopover ? () => closePopover() : undefined
        }
      >
        <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
          <img
            src={item.icon}
            alt=""
            className="h-14 w-14 text-gray-600 group-hover:text-indigo-600"
            aria-hidden="true"
          />
        </div>
        <div className="ml-4">
          <div className="flex items-center">
            <p className="text-sm font-medium text-gray-700">{item.name}</p>
            {!item.available && <ComingSoonTag />}
          </div>
          <p className="text-xs text-gray-500">{item.description}</p>
        </div>
      </Component>
    );
  };

  return (
    <div>
      <Disclosure
        as="nav"
        className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                {/* Botón de menú móvil visible hasta lg (incluye md) */}
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <NavLink to={RoutePaths.HOME}>
                      <img
                        className="h-8 w-auto"
                        src="/assets/logo_hs.png"
                        alt="homespotter"
                      />
                    </NavLink>
                  </div>
                  {/* Menú de escritorio visible solo en lg y superiores */}
                  <div className="hidden lg:ml-6 lg:block">
                    <div className="ml-12 flex space-x-4">
                      <NavLink
                        key="Inicio"
                        to={RoutePaths.HOME}
                        className={classNames(
                          activeTab === RoutePaths.HOME
                            ? "bg-red-500 text-white"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-600",
                          "rounded-md px-3 py-2 font-hanken text-sm"
                        )}
                      >
                        Inicio
                      </NavLink>
                      <Popover className="relative">
                        {({ open, close }) => (
                          <>
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "bg-gray-100 text-gray-600"
                                  : "text-gray-600 hover:bg-gray-100",
                                "inline-flex items-center rounded-md px-3 py-2 font-hanken text-sm focus:outline-none"
                              )}
                            >
                              <span>Productos</span>
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "rotate-0",
                                  "ml-1 h-5 w-5 transform transition-transform duration-200"
                                )}
                                aria-hidden="true"
                              />
                            </Popover.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md px-4 sm:px-0 md:left-0 lg:-translate-x-1/2 xl:left-1/2">
                                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-lg bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 lg:max-w-5xl">
                                  <div className="grid grid-cols-1 gap-6 p-4 lg:grid-cols-3">
                                    {PRODUCTS_CONFIG.map((category) => (
                                      <div key={category.category}>
                                        <h3 className="rounded-none border-b-2 border-red-500 px-2.5 py-3 text-sm font-semibold text-gray-700">
                                          {category.category}
                                        </h3>
                                        <div className="mt-4 space-y-4">
                                          {category.items.map((item) => (
                                            <ProductItem
                                              key={item.id}
                                              item={item}
                                              closePopover={close}
                                            />
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="bg-gray-50 px-8 py-6">
                                    <div className="flex items-center gap-x-3">
                                      <h3 className="text-sm font-semibold leading-6 text-gray-600">
                                        Integración
                                      </h3>
                                      <p className="rounded-full bg-red-500/10 px-2.5 py-1.5 text-xs font-semibold text-red-500">
                                        API
                                      </p>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                      Integra nuestras herramientas a tu sistema
                                      de trabajo.
                                    </p>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>

                      {/* Agregar enlace Nosotros */}
                      <NavLink
                        key="Nosotros"
                        to={RoutePaths.NOSOTROS}
                        className={classNames(
                          activeTab === RoutePaths.NOSOTROS
                            ? "bg-red-500 text-white"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-600",
                          "rounded-md px-3 py-2 font-hanken text-sm"
                        )}
                      >
                        Nosotros
                      </NavLink>

                      {navigation
                        .filter((item) => item.name !== "Inicio")
                        .map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className={classNames(
                              activeTab === item.path
                                ? "bg-red-500 text-white"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-600",
                              "rounded-md px-3 py-2 font-hanken text-sm"
                            )}
                            target={
                              item.path.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <NavLink
                    to="/pagar-facturas/"
                    className="-mr-4 inline-flex items-center rounded-md px-2 py-2 font-hanken text-sm text-gray-600 hover:text-red-500 sm:mr-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CreditCardIcon
                      className="h-6 w-6 sm:mr-2"
                      aria-hidden="true"
                    />
                    <span className="hidden sm:block">Pagar Facturas</span>
                  </NavLink>
                  <a
                    href="https://app.homespotter.app"
                    className="-mr-4 ml-3 inline-flex items-center rounded-md px-2 py-2 font-hanken text-sm text-gray-600 hover:text-red-500 sm:mr-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UserIcon className="h-6 w-6 sm:mr-2" aria-hidden="true" />
                    <span className="hidden sm:block">Login</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Panel de navegación móvil visible en pantallas menores a lg (incluye md y sm) */}
            <Disclosure.Panel className="lg:hidden">
              <div className="h-screen space-y-1 overflow-auto px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={NavLink}
                    to={item.path}
                    className={classNames(
                      activeTab === item.path
                        ? "bg-red-500 text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-600",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    target={item.path.startsWith("http") ? "_blank" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}

                {/* Agregar enlace Nosotros en el menú móvil */}
                <Disclosure.Button
                  key="Nosotros"
                  as={NavLink}
                  to={RoutePaths.NOSOTROS}
                  className={classNames(
                    activeTab === RoutePaths.NOSOTROS
                      ? "bg-red-500 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-600",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  Nosotros
                </Disclosure.Button>

                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-md my-4 rounded-md bg-gray-100 px-3 py-2 font-medium text-gray-700">
                    Productos
                  </h3>
                  <div className="space-y-1 pb-64">
                    {PRODUCTS_CONFIG.map((category) => (
                      <div key={category.category}>
                        <h3 className="rounded-none border-b-2 border-red-500 px-2.5 py-3 text-sm font-semibold text-gray-700">
                          {category.category}
                        </h3>
                        <div className="mt-4 space-y-4">
                          {category.items.map((item) => (
                            <ProductItem
                              key={item.id}
                              item={item}
                              closePopover={() => {}}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
