import PopupWithForm from "../PopupWithForm/PopupWithForm.js";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setFormInput} from "../../store/actions/formSettingActions";
import "../PopupWithForm/PopupWithForm.css";

const LoginPopupup = () =>
  // {
  // onSetVaildMsg,
  // isOpen,
  // handlePopupMouseDown,
  // isValidInput,
  // closeAllPopup,
  // validMsg,
  // handleSubmitAddItem,
  // handleMsgVaild,
  // onChangeInput
  // }
  {
    const formSetting = useSelector((state) => state.fromSettingModule);
    const dispatch = useDispatch();
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
              e.preventDefault();
              dispatch(
                setFormInput({inputKey: "email", inputVal: e.target.value})
              );
            }}
            type="email"
            placeholder="Enter email"
            name="email_address"
            value={formSetting.inputs.email || ""}
            required
          />
          <span className="popup__input-error">{"bla"}</span>
          <label className="popup__label">Password</label>
          <input
            className="popup__input popup__input_order_second-input"
            type="password"
            value={formSetting.inputs.password || ""}
            name="user_password"
            onChange={(e) => {
              e.preventDefault();
              dispatch(
                setFormInput({inputKey: "password", inputVal: e.target.value})
              );
            }}
            placeholder="Enter password"
            required
          />

        </PopupWithForm>
    );
  };
export default LoginPopupup;
