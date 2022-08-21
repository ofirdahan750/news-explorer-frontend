import {combineReducers} from "redux";
import {formSettingReducer} from "./formSettingReducer.js";

export const rootReducer = combineReducers({
  fromSettingModule: formSettingReducer
});
