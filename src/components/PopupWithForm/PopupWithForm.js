import React from "react";
const PopupWithForm = ({
  children,
  handleSubmit,
  formSetting: {type, btnSetting, heading},
  handlePopupMouseDown,
  isOpen,
  isValidInput,
  closeAllPopup
}) => {
  return (
    <div
      className={`popup popup_type_${isOpen ? type : ""} ${
        isOpen ? "popup_visible" : ""
      }`}
      onMouseDown={handlePopupMouseDown}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button button-modifier animation-modifier_type_opacity-hover"
          onClick={closeAllPopup}
        ></button>
        <div className="popup__wrapper">
          <h2 className="popup__heading">{heading}</h2>
          <form className="popup__form" noValidate onSubmit={handleSubmit}>
            <fieldset className="popup__fieldset">
              {children}
              <button
                className={`popup__submit-button button-modifier animation-modifier_type_opacity-hover${
                  type === "confirm"
                    ? "popup__submit-button_type_delete-confirm"
                    : ""
                } ${!isValidInput ? "popup__submit-button_inactive" : ""}`}
                type="submit"
                disabled={btnSetting.isDisable || !isValidInput}
              >
                {btnSetting.txt || "Loading..."}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PopupWithForm;
