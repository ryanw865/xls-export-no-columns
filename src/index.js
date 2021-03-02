import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import { StateProvider } from "./components/Context/TableContext";

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
