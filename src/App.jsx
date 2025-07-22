import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./general/Router.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Router />
      </div>
    </BrowserRouter>
  );
};
