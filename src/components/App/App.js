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

import Header from "../Header/Header";
import Search from "../Search/Search";
import AboutAuthor from "../AboutAuthor/AboutAuthor";

const App = () => {
  const [currentUser, setCurrentUser] = useState(loadingInitState.userInfo);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <div className="hero-cover">
          <Header></Header>
          <Search></Search>
        </div>
      </div>
      <main className="main">
        <AboutAuthor></AboutAuthor>
      </main>
    </CurrentUserContext.Provider>
  );
};
export default App;
