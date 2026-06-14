import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";

import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./context/ThemeContext";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
        />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);