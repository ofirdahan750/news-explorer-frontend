import {articlesState} from "../../utils/constants.js";
const initialState = articlesState.init;

export function articlesReducer(state = initialState, action) {
  const {payLoad, type} = action;
  if (type === "SET_ARTICLES") {
    console.log("payLoad", payLoad);
  }
  switch (type) {
    case "SET_ARTICLES":
      return {...state, articles: payLoad};
    case "SET_ARTICLE_LIST_SETTINGS":
      return {
        ...state,
        listSetting: payLoad
      };
    case "SET_ARTICLE_LIST_SETTING":
      return {
        ...state,
        listSetting: {
          ...state.listSetting,
          [payLoad.settingKey]: payLoad.settingData
        }
      };
    default:
      return state;
  }
}
