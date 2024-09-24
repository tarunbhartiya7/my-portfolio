import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./contexts/theme";
import App from "./App";

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
