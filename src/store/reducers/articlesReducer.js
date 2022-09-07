import {articlesStateInit} from "../../utils/constants.js";
const initialState = articlesStateInit;

export function articlesReducer(state = initialState, action) {
  const {payLoad, type} = action;
  // if (type === "SET_ARTICLE") {
  //   debugger;
  // }
  switch (type) {
    case "SET_ARTICLES":
      return {...state, [payLoad.key]: payLoad.val};
    case "SET_ARTICLE":
      return {...state, [payLoad.key]: [...state[payLoad.key], payLoad.val]};
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
