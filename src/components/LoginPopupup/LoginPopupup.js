import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
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
  const dispatch = useDispatch();
  const onChangeInput = (e, key) => {
    e.preventDefault();
    dispatch(setFormSetting(e.target.value, key));
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
          onChangeInput(e, "formInput.firstInput");
        }}
        type="email"
        placeholder="Enter email"
        name="email_address"
        value={formSetting.formInput.firstInput || ""}
        required
      />
      <span className="popup__input-error">{validMsg.titleInput || ""}</span>
      <input
        className="popup__input popup__input_order_second-input"
        type="url"
        value={imgSrc || ""}
        name="img_url"
        onChange={(e) => {
          onChangeInput(e, "formInput.secInput");
        }}
        placeholder="Image link"
        required
      />
      <span className="popup__input-error">{validMsg.urlInput || ""}</span>
    </PopupWithForm>
  );
};
export default LoginPopupup;
