import {formState} from "../../utils/constants.js";
import {SET_INPUT, SET_SETTING, SET_SETTINGS} from "../constants.js";
const initialState = formState.init;

export function formSettingReducer(state = initialState, action) {
  const {payLoad, type} = action;
  switch (type) {
    case SET_SETTINGS:
      return {...formState[payLoad]};
    case SET_SETTING:
      return {...state, [payLoad.settingKey]: payLoad.settingData};
    case SET_INPUT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [payLoad.inputKey]: {
            inputVal: payLoad.inputVal,
            inputMsgVaild: payLoad.inputMsgVaild
          }
        }
      };
    default:
      return state;
  }
}
