import React from "react";
import {register} from "../../utils/auth";
import "./PopupWithForm.css";
const PopupWithForm = ({
  children,
  handleSubmit,
  handlePopupMouseDown,
  settingPopupWithForm: {
    type,
    isOpen,
    title,
    isFormVaild,
    btnSetting,
    bottomLink,
    inputs
  },
  currType,
  handlePopupToggleView
}) => {
  return (
    <div
      className={`popup popup_type_${
        isOpen && currType === type ? `${currType} popup_visible` : ""
      }`}
      onMouseDown={handlePopupMouseDown}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button opacity-transition btn-link-modifier"
          onClick={() => {
            handlePopupToggleView();
          }}
        ></button>
        <div className="popup__wrapper">
          <h2 className={`popup__heading popup__heading_type_${type}`}>
            {title}
          </h2>
          <form
            className={`popup__form popup__form_type_${type}`}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <fieldset className="popup__fieldset">
              {children}
              {type !== "signup_success" && (
                <button
                  className={`popup__submit-button ${
                    !isFormVaild || btnSetting.isDisable
                      ? "popup__submit-button_inactive"
                      : ""
                  }
                btn-link-modifier animation-modifier_type_opacity-hover$`}
                  type="submit"
                  disabled={!isFormVaild || btnSetting.isDisable}
                >
                  {btnSetting.txt || "Loading..."}
                </button>
              )}
            </fieldset>

            <div
              className={`popup__bottom-link popup__bottom-link_type_${type} link-modifier animation-modifier_type_opacity-hover`}
            >
              {bottomLink.txt.beforeSpan} {""}
              <span
                onClick={() => {
                  handlePopupToggleView(bottomLink.linkType);
                }}
                className="popup__bottom-link_txt_link popup__bottom-link_type_signup_success"
              >
                {bottomLink.txt.afterSpan}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PopupWithForm;
