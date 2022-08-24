import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {setFormSetting} from "../../store/actions/formSettingActions";

const LoginPopupup = ({
  onSetVaildMsg,
  isOpen,
  handlePopupMouseDown,
  isValidInput,
  closeAllPopup,
  validMsg,
  handleSubmitAddItem,
  handleMsgVaild
}) => {
  const {formSetting} = useSelector((state) => state.fromSettingModule);
  const [inputs, setInputs] = useState({email: "", password: ""});
  const onChangeInput = (e, key) => {
    e.preventDefault();
    setInputs((prevState) => ({
      ...prevState,
      [key]: e.target.value
    }));
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      formSetting={formSetting}
      handlePopupMouseDown={handlePopupMouseDown}
      isValidInput={isValidInput}
      closeAllPopup={closeAllPopup}
      handleSubmit={handleSubmit}
    >
      <label className="popup__label"></label>
      <input
        className="popup__input popup__input_order_first-input"
        onChange={(e) => {
          onChangeInput(e, "email");
        }}
        type="email"
        placeholder="Enter email"
        name="email_address"
        value={inputs.email || ""}
        required
      />
      <span className="popup__input-error">{validMsg.titleInput || ""}</span>
      <input
        className="popup__input popup__input_order_second-input"
        type="password"
        value={inputs.password || ""}
        name="users_password"
        onChange={(e) => {
          onChangeInput(e, "password");
        }}
        placeholder="Image link"
        required
      />
      <span className="popup__input-error">{validMsg.urlInput || ""}</span>
    </PopupWithForm>
  );
};
export default LoginPopupup;
