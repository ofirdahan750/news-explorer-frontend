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

const App = () => {
  const [currentUser, setCurrentUser] = useState(loadingInitState.userInfo);
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <div className="hero-cover">
          <Header></Header>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};
export default App;
