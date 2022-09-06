import setSortedArticles from "../utils/actionUtils.js";
export const setArticles = ({articles, key}) => {
  return {
    type: "SET_ARTICLES",
    payLoad: {key, val: articles}
  };
};
export const setArticlesApi = ({articles, isSearchHaveResults, key}) => {
  return {
    type: "SET_ARTICLES",
    payLoad: {
      key,
      val: isSearchHaveResults ? setSortedArticles(articles) : []
    }
  };
};

export const setArticleListSettings = (settingData) => {
  return {type: "SET_ARTICLE_LIST_SETTINGS", payLoad: settingData};
};
export const setArticleListSetting = ({settingKey, settingData}) => {
  return {type: "SET_ARTICLE_LIST_SETTING", payLoad: {settingKey, settingData}};
};
