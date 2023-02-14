import React from "react";
import {StrictMode} from "react";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {disableReactDevTools} from "@fvilers/disable-react-devtools";

import {store} from "./store/store.js";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
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
