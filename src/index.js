import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "core-js/stable";
import "./styles.css";
import DefaultErrorBoundary from "./DefaultErrorBoundary";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>
);
