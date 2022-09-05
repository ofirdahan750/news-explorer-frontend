import setSortedArticles from "../utils/actionUtils.js";
export const setArticles = (articles) => {
  return {
    type: "SET_ARTICLES",
    payLoad: articles || []
  };
};
export const setArticlesApi = ({articles, isSearchHaveResults}) => {
  return {
    type: "SET_ARTICLES",
    payLoad: isSearchHaveResults ? setSortedArticles(articles) : []
  };
};

export const setArticleListSettings = (settingData) => {
  return {type: "SET_ARTICLE_LIST_SETTINGS", payLoad: settingData};
};
export const setArticleListSetting = ({settingKey, settingData}) => {
  return {type: "SET_ARTICLE_LIST_SETTING", payLoad: {settingKey, settingData}};
};
