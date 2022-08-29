import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React from "react";
import {useSelector} from "react-redux";
import "../PopupWithForm/PopupWithForm.css";

const RegisterPopupup = ({
  onChangeInput,
  handlePopupMouseDown,
  handlePopupToggleView,
  isInputHaveKey
}) => {
  const {
    type,
    isOpen,
    title,
    isFormVaild,
    btnSetting,
    bottomLink,
    serverError
  } = useSelector((state) => state.fromSettingModule);
  const settingPopupWithForm = {
    type,
    isOpen,
    title,
    isFormVaild,
    btnSetting,
    bottomLink
  };
  const currType = "register";
  return (
    <PopupWithForm
      handlePopupMouseDown={handlePopupMouseDown}
      closeAllPopup={() => {
        console.log("wow");
      }}
      handleSubmit={() => {
        console.log("wow");
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
        onChange={(e) => {
          onChangeInput(e);
        }}
        placeholder="Enter your username"
        required
      />
      <span
        className="popup__input-error"
        style={{minHeight: serverError && "17px"}} //Fixing the height when servererror is activef
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
