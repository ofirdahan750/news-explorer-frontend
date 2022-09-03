import "./App.css";
import React, {useEffect, useState, useCallback} from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import {loadingInitState, txtErr} from "../../utils/constants";

import Header from "../Header/Header.js";
import Search from "../Search/Search.js";
import AboutAuthor from "../AboutAuthor/AboutAuthor.js";
import SearchArticles from "../SearchArticles/SearchArticles.js";
import Footer from "../Footer.js";

import LoginPopupup from "../LoginPopupup/LoginPopupup.js";
import RegisterPopupup from "../RegisterPopupup/RegisterPopupup.js";
import SuccessPopupup from "../SuccessPopupup/SuccessPopupup.js";
import {useDispatch, useSelector} from "react-redux";
import {
  setFormInput,
  setFormSetting,
  setFormSettings
} from "../../store/actions/formSettingActions";
import {setLoading} from "../../store/actions/loadingAction";
import {validateToken} from "../../utils/auth";
import {
  setArticles,
  setIsArticlesLoading
} from "../../store/actions/articlesAction";
const App = () => {
  const [currentUser, setCurrentUser] = useState(loadingInitState.userInfo);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {inputs, isFormVaild, isOpen} = useSelector(
    (state) => state.fromSettingModule
  );
  const {isLoading} = useSelector((state) => state.loadingModule);

  const dispatch = useDispatch();
  useEffect(() => {
    onInit(); //When app init set username
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //Set the isFormVaild key on the formSettingReducer
    const isAllInputsFilled = Object.values(inputs).every((v) => v.inputVal);
    const isVaildMsgActive = !Object.values(inputs).some((val) =>
      Boolean(val.inputMsgVaild)
    );
    const formVaild = isAllInputsFilled && isVaildMsgActive;
    if (formVaild !== isFormVaild) {
      dispatch(
        setFormSetting({settingKey: "isFormVaild", settingData: formVaild})
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs]);
  useEffect(
    //Set and Remove Popups event esc button
    () => {
      if (isOpen) {
        document.addEventListener("keydown", handleEscClose);
      } else {
        document.removeEventListener("keydown", handleEscClose);
      }
    },
    // eslint-disable-next-line
    [isOpen]
  );

  const onInit = () => {
    dispatch(setLoading(true));
    const jwt = localStorage.getItem("jwt") || false;
    if (jwt) {
      validateToken(jwt)
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          handleLogOutclicked();
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    } else {
      handleLogOutclicked();
      dispatch(setLoading(false));
    }
  };

  const handleEscClose = useCallback((e) => {
    if (e.key === "Escape") {
      handlePopupToggleView();
    }
    // eslint-disable-next-line
  }, []);

  const onChangeInput = (e) => {
    e.preventDefault();
    const {
      target: {name, validationMessage, value}
    } = e;
    dispatch(
      setFormInput({
        inputKey: name,
        inputVal: value,
        inputMsgVaild:
          validationMessage === "Please match the requested format."
            ? "Invalid email address, Please enter a valid email"
            : validationMessage
      })
    );
  };
  const handlePopupMouseDown = (e) => {
    const contextMenu = 2;
    if (
      e.button !== contextMenu &&
      e.target.classList.contains("popup_visible")
    ) {
      handlePopupToggleView();
    } else {
      return;
    }
  };
  const handlePopupToggleView = (stateKey = "close") => {
    dispatch(setFormSettings(stateKey));
  };

  const isInputHaveKey = ({key, subKey}) => {
    return (inputs.hasOwnProperty(key) && inputs[key][subKey]) || "";
  };
  const onFormSubmitted = ({isDone, btnSetting, err}) => {
    if (!isDone) {
      dispatch(
        setFormSetting({
          settingKey: "btnSetting",
          settingData: {txt: "Loading...", isDisable: true}
        })
      );
      dispatch(setLoading(true));
    } else {
      if (err) {
        dispatch(
          setFormSetting({
            settingKey: "serverError",
            settingData: err === "Failed to fetch" ? txtErr : err
          })
        );

        setTimeout(() => {
          //Make error go away after 2 sec
          dispatch(
            setFormSetting({
              settingKey: "serverError",
              settingData: ""
            })
          );
        }, 2000);
      }
      dispatch(
        setFormSetting({
          settingKey: "btnSetting",
          settingData: btnSetting
        })
      );
      dispatch(setLoading(false));
    }
  };
  const handleLogOutclicked = () => {
    setIsLoggedIn(false);
    setCurrentUser(loadingInitState.userInfo);
    localStorage.removeItem("jwt");
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={`preloader ${isLoading && "preloader_visible"}`}>
                <i className="preloader__circle"></i>
              </div>
              <div className="page__content fade-in">
                <div
                  className="hero-cover"
                  role="img"
                  aria-label="Main photo cover of the the site - a Hand holding a white mobile phone"
                >
                  <Header
                    handlePopupToggleView={handlePopupToggleView}
                    isLoggedIn={isLoggedIn}
                    handleLogOutclicked={handleLogOutclicked}
                  />
                  <Search />
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <Header
              handlePopupToggleView={handlePopupToggleView}
              isLoggedIn={isLoggedIn}
              handleLogOutclicked={handleLogOutclicked}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <SearchArticles isLoggedIn={isLoggedIn} />
      <main className="main">
        <AboutAuthor />
      </main>
      <Footer />
      <LoginPopupup
        onChangeInput={onChangeInput}
        handlePopupMouseDown={handlePopupMouseDown}
        handlePopupToggleView={handlePopupToggleView}
        isInputHaveKey={isInputHaveKey}
        onFormSubmitted={onFormSubmitted}
        setCurrentUser={setCurrentUser}
        setIsLoggedIn={setIsLoggedIn}
      />
      <RegisterPopupup
        onChangeInput={onChangeInput}
        handlePopupMouseDown={handlePopupMouseDown}
        handlePopupToggleView={handlePopupToggleView}
        onFormSubmitted={onFormSubmitted}
        isInputHaveKey={isInputHaveKey}
      />
      <SuccessPopupup
        handlePopupMouseDown={handlePopupMouseDown}
        handlePopupToggleView={handlePopupToggleView}
      />
    </CurrentUserContext.Provider>
  );
};
export default App;
