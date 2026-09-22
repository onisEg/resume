import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import "./styles/portfolio.css";

import App from "./App.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
