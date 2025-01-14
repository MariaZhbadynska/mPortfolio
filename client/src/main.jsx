import React from "react";
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";
import store from "./store.js"
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
  );
