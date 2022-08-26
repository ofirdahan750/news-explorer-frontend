import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React from "react";
import {useSelector} from "react-redux";
import "../PopupWithForm/PopupWithForm.css";

const LoginPopupup = ({onChangeInput, handlePopupMouseDown}) => {
  const {
    inputs: {emailAddress, userPassword},
    type,
    isOpen,
    title,
    isFormVaild,
    btnSetting
  } = useSelector((state) => state.fromSettingModule);
  const settingPopupWithForm = {
    type,
    isOpen,
    title,
    isFormVaild,
    btnSetting
  };
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
      currType={"login"}
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
        value={emailAddress.inputVal || ""}
        required
      />
      <span className="popup__input-error">
        {emailAddress.inputMsgVaild || ""}
      </span>
      <label className="popup__label">Password</label>
      <input
        className="popup__input popup__input_order_second-input"
        type="password"
        value={userPassword.inputVal || ""}
        name="userPassword"
        minLength="6"
        onChange={(e) => {
          onChangeInput(e);
        }}
        placeholder="Enter password"
        required
      />
      <span className="popup__input-error">{userPassword.inputMsgVaild}</span>
    </PopupWithForm>
  );
};
export default LoginPopupup;
