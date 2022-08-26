import React from "react";
import "./PopupWithForm.css";
const PopupWithForm = ({
  children,
  handleSubmit,
  handlePopupMouseDown,
  settingPopupWithForm: {type, isOpen, title, isFormVaild, btnSetting},
  closeAllPopup,
  currType
}) => {
  console.log("currType:", currType);
  console.log("type:", type);
  console.log("isOpen:", isOpen);
  return (
    <div
      className={`popup popup_type_${
        isOpen && currType === type ? `${currType} popup_visible` : ""
      }`}
      onMouseDown={handlePopupMouseDown}
      // onContextMenu={(e) => e.preventDefault()} //After done need will return
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button btn-link-modifier animation-modifier_type_opacity-hover"
          onClick={closeAllPopup}
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
                  !isFormVaild && "popup__submit-button_inactive"
                }
                btn-link-modifier animation-modifier_type_opacity-hover$ `}
                type="submit"
                disabled={!isFormVaild}
              >
                {btnSetting.txt || "Loading..."}
              </button>
            </fieldset>
            <div className="popup__bottom-link link-modifier animation-modifier_type_opacity-hover">
              or <span className="popup__bottom-link_txt_link">Sign Up</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PopupWithForm;
