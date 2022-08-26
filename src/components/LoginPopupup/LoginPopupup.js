import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React from "react";
import {useSelector} from "react-redux";
import {
  onSetVaildMsg,
  setFormInput,
  setFormVaild
} from "../../store/actions/formSettingActions";
import "../PopupWithForm/PopupWithForm.css";

const LoginPopupup = ({onChangeInput}) => {
  const formSetting = useSelector((state) => state.fromSettingModule);
  return (
    <PopupWithForm
      isOpen={true}
      formSetting={formSetting}
      handlePopupMouseDown={() => {
        console.log("wow");
      }}
      isValidInput={true}
      closeAllPopup={() => {
        console.log("wow");
      }}
      handleSubmit={() => {
        console.log("wow");
      }}
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
        value={formSetting.inputs.emailAddress.inputVal || ""}
        required
      />
      <span className="popup__input-error">
        {formSetting.inputs.emailAddress.inputMsgVaild || ""}
      </span>
      <label className="popup__label">Password</label>
      <input
        className="popup__input popup__input_order_second-input"
        type="password"
        value={formSetting.inputs.userPassword.inputVal || ""}
        name="userPassword"
        minLength="6"
        onChange={(e) => {
          onChangeInput(e);
        }}
        placeholder="Enter password"
        required
      />
      <span className="popup__input-error">
        {formSetting.inputs.userPassword.inputMsgVaild}
      </span>
    </PopupWithForm>
  );
};
export default LoginPopupup;
