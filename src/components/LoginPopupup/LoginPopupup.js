import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React from "react";
import {useSelector} from "react-redux";
import {authenticate, validateToken} from "../../utils/auth.js";
import {txtErr} from "../../utils/constants.js";
import {capitalizeFirstLetter} from "../../utils/utils.js";
import mainApi from "../../utils/MainApi.js";
import {saveToStorage} from "../../utils/StorageService.js";
import {removeFromStorage} from "../../utils/StorageService.js";

const LoginPopupup = ({
  onChangeInput,
  handlePopupMouseDown,
  handlePopupToggleView,
  isInputHaveKey,
  setCurrentUser,
  onFormSubmitted,
  setIsLoggedIn
}) => {
  const {
    type,
    isOpen,
    title,
    isFormVaild,
    btnSetting,
    bottomLink,
    serverError,
    inputs
  } = useSelector((state) => state.fromSettingModule);

  const settingPopupWithForm = {
    type,
    isOpen,
    title,
    isFormVaild,
    btnSetting,
    bottomLink,
    inputs
  };
  const currType = "login";

  return (
    <PopupWithForm
      handlePopupMouseDown={handlePopupMouseDown}
      handleSubmit={(e) => {
        e.preventDefault();
        onFormSubmitted({isDone: false});
        authenticate({
          email: inputs.emailAddress.inputVal.toString().toLowerCase(),
          password: inputs.userPassword.inputVal
        })
          .then((user) => {
            saveToStorage("jwt", user.token);
            mainApi.setHeaderToken(user.token);
            validateToken(user.token)
              .then((userInfo) => {
                userInfo.name = capitalizeFirstLetter(userInfo.name);
                onFormSubmitted({
                  isDone: true,
                  btnSetting: {
                    txt: `Welcome ${userInfo.name} You have successfully logged in, Please wait...`,
                    isDisable: true
                  }
                });

                setCurrentUser(userInfo);
                setIsLoggedIn(true);
                setTimeout(() => {
                  handlePopupToggleView("close");
                }, 2000);
              })
              .catch((err) => {
                removeFromStorage("jwt");
                mainApi.setHeaderToken("");
                onFormSubmitted({
                  isDone: true,
                  btnSetting: {txt: "Sign in", isDisable: false},
                  err: err.message || txtErr
                });
              });
          })
          .catch((err) => {
            onFormSubmitted({
              isDone: true,
              btnSetting: {txt: "Sign in", isDisable: false},
              err: err.message || txtErr
            });
          });
      }}
      settingPopupWithForm={settingPopupWithForm}
      currType={currType}
      handlePopupToggleView={handlePopupToggleView}
    >
      <label className="popup__label">Email</label>
      <input
        className="popup__input"
        autoFocus
        onChange={(e) => {
          onChangeInput(e);
        }}
        type="email"
        placeholder="Enter email"
        name="emailAddress"
        pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
        title="Invalid email address"
        value={isInputHaveKey({key: "emailAddress", subKey: "inputVal"})}
        required
      />
      <span className="popup__input-error">
        {isInputHaveKey({key: "emailAddress", subKey: "inputMsgVaild"})}
      </span>

      <label className="popup__label">Password</label>
      <input
        className="popup__input"
        type="password"
        value={isInputHaveKey({key: "userPassword", subKey: "inputVal"})}
        name="userPassword"
        minLength="6"
        onChange={(e) => {
          onChangeInput(e);
        }}
        placeholder="Enter password"
        required
      />
      <span
        className="popup__input-error"
        style={{minHeight: serverError && "17px"}}
      >
        {isInputHaveKey({key: "userPassword", subKey: "inputMsgVaild"})}
      </span>
      <span className="popup__input-error popup__input-error_type_server-error">
        {serverError}
      </span>
    </PopupWithForm>
  );
};
export default LoginPopupup;
