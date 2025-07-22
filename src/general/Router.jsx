import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import { Home } from "../home/Home.jsx";
import { NotFound } from "../pages/NotFound";
import { ConocerMas } from "../pages/ConocerMas";
import { ModuleInsights } from "../pages/ModuleInsights";
import { ModulePersonas } from "../pages/ModulePersonas";
import { ModulePropiedades } from "../pages/ModulePropiedades";
import { ModuleInformeValorizacion } from "../pages/ModuleInformeValorizacion.jsx";
import { ModuleInformeArrendatarios } from "../pages/ModuleInformeArrendatarios.jsx";
import { Nosotros } from "../pages/Nosotros.jsx";
import { PagarFacturas } from "../pages/PagarFacturas.jsx";
import { PagarFacturasDetail } from "../pages/PagarFacturasDetail.jsx";
import { PagoExitoso } from "../pages/PagoExitoso.jsx";
import { PagoPendiente } from "../pages/PagoPendiente.jsx";
import { PagoRechazado } from "../pages/PagoRechazado.jsx";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

export const Router = () => {
  const location = useLocation();

  const hideHeaderFooterRoutes = [
    RoutePaths.FACTURASINIT,
    RoutePaths.FACTURADETAIL.replace(":rut", ""), // Asegura que se ignore el parámetro en la verificación
    RoutePaths.PAGOEXITOSO,
    RoutePaths.PAGOPENDIENTE,
    RoutePaths.PAGORECHAZADO,
  ];

  const shouldHideHeaderFooter = hideHeaderFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideHeaderFooter && <NavBar />}
      <div className="flex-grow">
        <Routes>
          <Route path={RoutePaths.HOME} element={<Home />} />
          <Route path={RoutePaths.CONOCERMAS} element={<ConocerMas />} />
          <Route path={RoutePaths.MODINSIGHTS} element={<ModuleInsights />} />
          <Route
            path={RoutePaths.MODINFARRENDATARIOS}
            element={<ModuleInformeArrendatarios />}
          />
          <Route
            path={RoutePaths.MODINFVALORIZACION}
            element={<ModuleInformeValorizacion />}
          />
          <Route path={RoutePaths.MODPERSONAS} element={<ModulePersonas />} />
          <Route
            path={RoutePaths.MODPROPIEDADES}
            element={<ModulePropiedades />}
          />
          <Route path={RoutePaths.FACTURASINIT} element={<PagarFacturas />} />
          <Route
            path={RoutePaths.FACTURADETAIL}
            element={<PagarFacturasDetail />}
          />
          <Route path={RoutePaths.NOSOTROS} element={<Nosotros />} />
          <Route path={RoutePaths.PAGOEXITOSO} element={<PagoExitoso />} />
          <Route path={RoutePaths.PAGOPENDIENTE} element={<PagoPendiente />} />
          <Route path={RoutePaths.PAGORECHAZADO} element={<PagoRechazado />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};
