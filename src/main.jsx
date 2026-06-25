import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (window.location.pathname === "/admin" || window.location.pathname === "/admin/") {
  window.location.replace("/admin/index.html");
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
