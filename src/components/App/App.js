import "./App.css";
import React, {useCallback, useEffect, useState} from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import {
  loadingInitState,
  loadingInitError,
  txtErr,
  errImg
} from "../../utils/constants";

import Header from "../Header/Header.js";
import Search from "../Search/Search.js";
import AboutAuthor from "../AboutAuthor/AboutAuthor.js";
import Footer from "../Footer.js";

const App = () => {
  const [currentUser, setCurrentUser] = useState(loadingInitState.userInfo);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <div
          style={{maxWidth: "100vw"}}
          className="hero-cover"
          role="img"
          aria-label="Main photo cover of the the site - a Hand holding a white mobile phone"
        >
          <Header></Header>
          <Search></Search>
        </div>
      </div>
      <main className="main">
        <AboutAuthor></AboutAuthor>
      </main>
      <Footer></Footer>
    </CurrentUserContext.Provider>
  );
};
export default App;
