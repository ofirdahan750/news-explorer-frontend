import setSortedArticles from "../utils/actionUtils.js";

export const setArticles = ({articles, key}) => {
  return {
    type: "SET_ARTICLES",
    payLoad: {
      key,
      val: articles || []
    }
  };
};
export const setArticlesApi = ({articles, isSearchHaveResults, key}) => {
  let sortedArticles = [];
  if (articles && isSearchHaveResults) {
    sortedArticles = setSortedArticles(articles).sort(
      (a, b) => b.timeStampDate - a.timeStampDate
    );
  }
  return {
    type: "SET_ARTICLES",
    payLoad: {
      key,
      val: sortedArticles || []
    }
  };
};
export const setSavedArticle = (article) => {
  return {
    type: "SET_ARTICLE",
    payLoad: {val: article, key: "savedArticlesList"}
  };
};

export const setArticleListSettings = (settingData) => {
  return {type: "SET_ARTICLE_LIST_SETTINGS", payLoad: settingData};
};
export const setArticleListSetting = ({settingKey, settingData}) => {
  return {type: "SET_ARTICLE_LIST_SETTING", payLoad: {settingKey, settingData}};
};
