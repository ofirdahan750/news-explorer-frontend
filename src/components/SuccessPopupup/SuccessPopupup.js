import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React from "react";
import {useSelector} from "react-redux";

const SuccessPopupup = ({handlePopupMouseDown, handlePopupToggleView}) => {
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
    bottomLink,
    serverError
  };
  const currType = "signup_success";

  return (
    <PopupWithForm
      handlePopupMouseDown={handlePopupMouseDown}
      settingPopupWithForm={settingPopupWithForm}
      currType={currType}
      handlePopupToggleView={handlePopupToggleView}
    ></PopupWithForm>
  );
};
export default SuccessPopupup;
