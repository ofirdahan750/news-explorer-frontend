import {combineReducers} from "redux";
import {formSettingReducer} from "./formSettingReducer.js";
import {loadingReducer} from "./loadingReducer.js";
import {articlesReducer} from "./articlesReducer.js";

export const rootReducer = combineReducers({
  fromSettingModule: formSettingReducer,
  loadingModule: loadingReducer,
  articlesModule: articlesReducer
});
