import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React from "react";
import {useSelector} from "react-redux";
import "../PopupWithForm/PopupWithForm.css";
import {authenticate, validateToken} from "../../utils/auth.js";
import api from "../../utils/api.js";

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
        onFormSubmitted(false);
        authenticate({
          email: inputs.emailAddress.inputVal,
          password: inputs.userPassword.inputVal
        })
          .then((user) => {
            localStorage.setItem("jwt", user.token);
            api.setTokenHeader(user.token);
            validateToken(user.token)
              .then((userInfo) => {
                onFormSubmitted(
                  true,
                  `Welcome ${userInfo.name} You have successfully logged in, Please wait...`
                );
                setCurrentUser(userInfo);
                setIsLoggedIn(true);
                setTimeout(() => {
                  handlePopupToggleView("close");
                }, 2000);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }}
      settingPopupWithForm={settingPopupWithForm}
      currType={currType}
      handlePopupToggleView={handlePopupToggleView}
    >
      <label className="popup__label">Email</label>
      <input
        className="popup__input popup__input_order_first-input"
        autoFocus
        onChange={(e) => {
          onChangeInput(e);
        }}
        type="email"
        placeholder="Enter email"
        name="emailAddress"
        value={isInputHaveKey({key: "emailAddress", subKey: "inputVal"})}
        required
      />
      <span className="popup__input-error">
        {isInputHaveKey({key: "emailAddress", subKey: "inputMsgVaild"})}
      </span>

      <label className="popup__label">Password</label>
      <input
        className="popup__input popup__input_order_second-input"
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
