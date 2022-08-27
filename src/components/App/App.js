import "./App.css";
import React, {useEffect, useState} from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation
} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import {loadingInitState} from "../../utils/constants";

import Header from "../Header/Header.js";
import Search from "../Search/Search.js";
import AboutAuthor from "../AboutAuthor/AboutAuthor.js";
import Footer from "../Footer.js";

import LoginPopupup from "../LoginPopupup/LoginPopupup.js";
import RegisterPopupup from "../RegisterPopupup/RegisterPopupup.js";
import {useDispatch, useSelector} from "react-redux";
import {
  setFormInput,
  setFormSetting,
  setFormSettings
} from "../../store/actions/formSettingActions";

const App = () => {
  const [currentUser, setCurrentUser] = useState(loadingInitState.userInfo);
  const {inputs, isFormVaild, isOpen, type} = useSelector(
    (state) => state.fromSettingModule
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //Set the isFormVaild key on the  formSettingReducer
    const isAllInputsFilled = Object.values(inputs).every((v) => v.inputVal);
    const isVaildMsgActive = !Object.values(inputs).some((val) =>
      Boolean(val.inputMsgVaild)
    );
    const formVaild = isAllInputsFilled && isVaildMsgActive;
    if (formVaild !== isFormVaild) {
      onSetFromSetting("isFormVaild", formVaild);
    }
  }, [inputs]);

  const onSetFromSetting = (key, val) => {
    dispatch(setFormSetting({settingKey: key, settingData: val}));
  };
  const onChangeInput = (e) => {
    e.preventDefault();
    const {
      target: {name, validationMessage, value}
    } = e;
    dispatch(
      setFormInput({
        inputKey: name,
        inputVal: value,
        inputMsgVaild: validationMessage
      })
    );
  };
  const handlePopupMouseDown = (e) => {
    const contextMenu = 2;
    if (e.button === contextMenu) return;
    if (
      e.target.classList.contains("popup_visible") ||
      e.target.classList.contains("popup__close-button")
    ) {
      handlePopupToggleView();
    }
  };
  const handlePopupToggleView = (stateKey = "close") => {
    dispatch(setFormSettings(stateKey));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <div
          className="hero-cover"
          role="img"
          aria-label="Main photo cover of the the site - a Hand holding a white mobile phone"
        >
          <Header handlePopupToggleView={handlePopupToggleView} />
          <Search />
        </div>
      </div>
      <main className="main">
        <AboutAuthor />
      </main>
      <Footer />
      <LoginPopupup
        onChangeInput={onChangeInput}
        handlePopupMouseDown={handlePopupMouseDown}
        handlePopupToggleView={handlePopupToggleView}
      />
      <RegisterPopupup
        onChangeInput={onChangeInput}
        handlePopupMouseDown={handlePopupMouseDown}
        handlePopupToggleView={handlePopupToggleView}
      />
    </CurrentUserContext.Provider>
  );
};
export default App;
