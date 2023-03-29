import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AutenticacionProvider } from "./contexts/Session";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AutenticacionProvider>
      <App />
    </AutenticacionProvider>
  </React.StrictMode>
);
