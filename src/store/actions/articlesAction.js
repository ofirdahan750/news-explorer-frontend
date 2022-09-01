import data from "../../DemoData.json";
export const setArticles = (queryParmas) => {
  const articlesArray = data.articles.map((article) => {
    const {source, title, publishedAt, description, urlToImage} = article;
    const formattedDate = new Date(publishedAt);

    return {
      source: source.name,
      title: title,
      publishedAt: new Date(formattedDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }),
      description: description,
      imgUrl: urlToImage
    };
  });
  return {type: "SET_ARTICLES", payLoad: articlesArray};
};
export const setArticleListSettings = (settingData) => {
  return {type: "SET_ARTICLE_LIST_SETTINGS", payLoad: settingData};
};
export const setArticleListSetting = ({settingKey, settingData}) => {
  return {type: "SET_ARTICLE_LIST_SETTING", payLoad: {settingKey, settingData}};
};
