import React from "react";
import "./PopupWithForm.css";
const PopupWithForm = ({
  children,
  handleSubmit,
  formSetting: {btnSetting, title, type = true},
  handlePopupMouseDown,
  isOpen,
  currType = true,
  isValidInput,
  closeAllPopup
}) => {
  return (
    <div
      className={`popup popup_type_ popup_visible${
        isOpen && currType === type ? `${currType} popup_visible` : ""
      }
      }`}
      onMouseDown={handlePopupMouseDown}
      // onContextMenu={(e) => e.preventDefault()}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button btn-link-modifier animation-modifier_type_opacity-hover"
          onClick={closeAllPopup}
        ></button>
        <div className="popup__wrapper">
          <h2 className="popup__heading">{title}</h2>
          <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <fieldset className="popup__fieldset">
              {children}
              <button
                className={`popup__submit-button btn-link-modifier animation-modifier_type_opacity-hover${
                  type === "confirm"
                    ? "popup__submit-button_type_delete-confirm"
                    : ""
                } ${
                  !isValidInput === false ? "popup__submit-button_inactive" : ""
                }`}
                type="submit"
                disabled={btnSetting.isDisable || !isValidInput}
              >
                {btnSetting.txt || "Loading..."}
              </button>
            </fieldset>
          </form>
          <span className="popup__bottom-link link-modifier animation-modifier_type_opacity-hover">
            loading...
          </span>
        </div>
      </div>
    </div>
  );
};
export default PopupWithForm;
