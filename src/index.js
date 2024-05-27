import React from "react";
import App from "./App";
import store from "./redux/store";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./_base.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
