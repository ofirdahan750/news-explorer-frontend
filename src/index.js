import React from "react";
import {StrictMode} from "react";
import "./index.css";
import {Routes, Route, Navigate} from "react-router-dom";
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
        {/* <div className="preloader"> //Pre loader 
          <i className="circle-preloader"></i>
        </div> */}
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Provider>
    </Router>
  </StrictMode>
);

reportWebVitals();
