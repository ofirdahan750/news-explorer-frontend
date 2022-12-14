import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React from "react";
import {useSelector} from "react-redux";
import {register} from "../../utils/auth.js";
import {txtErr} from "../../utils/constants.js";

const RegisterPopupup = ({
  onChangeInput,
  handlePopupMouseDown,
  handlePopupToggleView,
  isInputHaveKey,
  onFormSubmitted
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
    inputs,
    bottomLink
  };
  const currType = "register";

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    onFormSubmitted({isDone: false});
    register({
      email: inputs.emailAddress.inputVal.toLowerCase().toString(),
      password: inputs.userPassword.inputVal,
      name: inputs.userName.inputVal
    })
      .then(() => {
        onFormSubmitted({
          isDone: true,
          btnSetting: {txt: "Loading...", isDisable: true}
        });
        handlePopupToggleView("signup_success");
      })
      .catch((err) => {
        onFormSubmitted({
          isDone: true,
          btnSetting: {txt: "Sign up", isDisable: false},
          err: err.message || txtErr
        });
      });
  };
  return (
    <PopupWithForm
      handlePopupMouseDown={handlePopupMouseDown}
      handleSubmit={handleNewUserSubmit}
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
        title="Invalid email address"
        pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
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
      <span className="popup__input-error">
        {isInputHaveKey({key: "userPassword", subKey: "inputMsgVaild"})}
      </span>
      <label className="popup__label">Name</label>
      <input
        className="popup__input popup__input_order_third-input"
        type="text"
        value={isInputHaveKey({key: "userName", subKey: "inputVal"})}
        name="userName"
        minLength="2"
        maxLength="30"
        onChange={(e) => {
          onChangeInput(e);
        }}
        placeholder="Enter your username"
        required
      />
      <span
        className="popup__input-error"
        style={{minHeight: serverError && "17px"}} //Fixing the height when servererror is active
      >
        {isInputHaveKey({key: "userName", subKey: "inputMsgVaild"})}
      </span>
      <span className="popup__input-error popup__input-error_type_server-error">
        {serverError}
      </span>
    </PopupWithForm>
  );
};
export default RegisterPopupup;
