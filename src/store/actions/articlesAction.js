import setSortedArticles from "../utils/actionUtils.js";
export const setArticles = ({articles, isSearchHaveResults}) => {
  let sortedArticles;
  if (isSearchHaveResults) {
    sortedArticles = setSortedArticles(articles);
  } else {
    sortedArticles = [];
  }
  return {type: "SET_ARTICLES", payLoad: sortedArticles};
};

export const setArticleListSettings = (settingData) => {
  return {type: "SET_ARTICLE_LIST_SETTINGS", payLoad: settingData};
};
export const setArticleListSetting = ({settingKey, settingData}) => {
  return {type: "SET_ARTICLE_LIST_SETTING", payLoad: {settingKey, settingData}};
};
