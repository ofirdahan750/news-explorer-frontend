import {articlesState} from "../../utils/constants.js";
const initialState = {
  listSetting: {
    isArticlesLoading: false,
    isArticlesSectionActive: false,
    openCardsAmount: 3
  },
  articles: [articlesState.init]
};

export function articlesReducer(state = initialState, action) {
  const {payLoad, type} = action;

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
