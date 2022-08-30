import {combineReducers} from "redux";
import {formSettingReducer} from "./formSettingReducer.js";
import {loadingReducer} from "./loadingReducer.js";

export const rootReducer = combineReducers({
  fromSettingModule: formSettingReducer,
  loadingModule: loadingReducer
});
