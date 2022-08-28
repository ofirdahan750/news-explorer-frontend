import React from "react";
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
    bottomLink
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
          className="popup__close-button btn-link-modifier animation-modifier_type_opacity-hover"
          onClick={() => {
            handlePopupToggleView();
          }}
        ></button>
        <div className="popup__wrapper">
          <h2 className="popup__heading">{title}</h2>
          <form
            className="popup__form"
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <fieldset className="popup__fieldset">
              {children}
              <button
                className={`popup__submit-button ${
                  !isFormVaild || btnSetting.isDisable
                    ? "popup__submit-button_inactive"
                    : ""
                }
                btn-link-modifier animation-modifier_type_opacity-hover$ `}
                type="submit"
                disabled={!isFormVaild || btnSetting.isDisable}
              >
                {btnSetting.txt || "Loading..."}
              </button>
            </fieldset>
            <div className="popup__bottom-link link-modifier animation-modifier_type_opacity-hover">
              {bottomLink.txt.beforeSpan} {""}
              <span
                onClick={() => {
                  handlePopupToggleView(bottomLink.linkType);
                }}
                className="popup__bottom-link_txt_link"
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
