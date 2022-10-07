import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "core-js/stable";
import "./styles.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
