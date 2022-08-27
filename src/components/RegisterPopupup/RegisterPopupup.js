import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React from "react";
import {useSelector} from "react-redux";
import "../PopupWithForm/PopupWithForm.css";

const RegisterPopupup = ({
  onChangeInput,
  handlePopupMouseDown,
  handlePopupToggleView
}) => {
  const {inputs, type, isOpen, title, isFormVaild, btnSetting,bottomLink} = useSelector(
    (state) => state.fromSettingModule
  );
  // if (!inputs.emailAddress || !inputs.userPassword || !inputs.userName) return;

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
      {inputs.hasOwnProperty('emailAddress') && (
        <>
          <input
            className="popup__input popup__input_order_first-input"
            autoFocus
            onChange={(e) => {
              onChangeInput(e);
            }}
            type="email"
            placeholder="Enter email"
            name="emailAddress"
            value={inputs.emailAddress.inputVal || ""}
            required
          />
          <span className="popup__input-error">
            {inputs?.emailAddress.inputMsgVaild || ""}
          </span>
        </>
      )}
      <label className="popup__label">Password</label>
      <label className="popup__label">Email</label>
      {inputs.hasOwnProperty('userPassword') && (
        <>
          <input
            className="popup__input popup__input_order_second-input"
            type="password"
            value={inputs.userPassword.inputVal || ""}
            name="userPassword"
            minLength="6"
            onChange={(e) => {
              onChangeInput(e);
            }}
            placeholder="Enter password"
            required
          />
          <span className="popup__input-error">
            {inputs?.userPassword.inputMsgVaild}
          </span>
        </>
      )}
      <label className="popup__label">Name</label>
      {inputs.hasOwnProperty('userName') && (
        <>
          <input
            className="popup__input popup__input_order_third-input"
            type="text"
            value={inputs.userName.inputVal || ""}
            name="userName"
            minLength="2"
            onChange={(e) => {
              onChangeInput(e);
            }}
            placeholder="Enter your username"
            required
          />
          <span className="popup__input-error">
            {inputs.userName.inputMsgVaild}
          </span>
        </>
      )}
    </PopupWithForm>
  );
};
export default RegisterPopupup;
