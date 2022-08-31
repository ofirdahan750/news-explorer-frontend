import React from "react";
import {StrictMode} from "react";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </StrictMode>
);

reportWebVitals();
