import "./App.css";
import React, {useCallback, useContext, useEffect, useState} from "react";
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

// import LoginPopupup from "../LoginPopupup/LoginPopupup.js";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
  const [currentUser, setCurrentUser] = useState(loadingInitState.userInfo);
  const formSetting = useSelector((state) => state.fromSettingModule);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <div
          className="hero-cover"
          role="img"
          aria-label="Main photo cover of the the site - a Hand holding a white mobile phone"
        >
          <Header />
          <Search />
        </div>
      </div>
      <main className="main">
        <Routes>
          <Route path="/"></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <AboutAuthor />
      </main>
      <Footer />
      {/* <LoginPopupup /> */}
    </CurrentUserContext.Provider>
  );
};
export default App;
