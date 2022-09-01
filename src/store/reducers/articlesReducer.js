import {articlesState} from "../../utils/constants.js";
const initialState = {isArticlesLoading: false, articles: [articlesState.init]};

export function articlesReducer(state = initialState, action) {
  const {payLoad, type} = action;

  switch (type) {
    case "SET_ARTICLES":
      return {...state, articles: payLoad};
    case "SET_ARTICLES_LOADING":
      return {...state, isArticlesLoading: payLoad};
    default:
      return state;
  }
}
