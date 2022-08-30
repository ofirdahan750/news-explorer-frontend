import "./App.css";
import React, {useEffect, useState, useCallback} from "react";
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
import SuccessPopupup from "../SuccessPopupup/SuccessPopupup.js";
import {useDispatch, useSelector} from "react-redux";
import {
  setFormInput,
  setFormSetting,
  setFormSettings
} from "../../store/actions/formSettingActions";
import {setLoading} from "../../store/actions/loadingAction";

const App = () => {
  const [currentUser, setCurrentUser] = useState(loadingInitState.userInfo);
  const {inputs, isFormVaild, isOpen} = useSelector(
    (state) => state.fromSettingModule
  );
  const dispatch = useDispatch();
  const {isLoading} = useSelector((state) => state.loadingModule);
  console.log("isloading:", isLoading);

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
        inputMsgVaild: validationMessage
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
  const onFormSubmitted = (isDone, btnTxt = "") => {
    if (!isDone) {
      dispatch(
        setFormSetting({
          settingKey: "btnSetting",
          settingData: {txt: "Loading...", isDisable: true}
        })
      );
      dispatch(setLoading(true));
    } else {
      dispatch(
        setFormSetting({
          settingKey: "btnSetting",
          settingData: {txt: btnTxt, isDisable: true}
        })
      );
      dispatch(setLoading(false));
    }
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={`preloader ${isLoading && "preloader_visible"}`}>
        <i className="preloader__circle"></i>
      </div>
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
        isInputHaveKey={isInputHaveKey}
        onFormSubmitted={onFormSubmitted}
        setCurrentUser={setCurrentUser}
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
