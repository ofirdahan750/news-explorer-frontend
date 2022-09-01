import data from "../../DemoData.json";
export const setArticles =  (queryParmas) => {
  setIsArticlesLoading(true)
  const articlesArray =  data.articles.map((article) => {
    const {source, title, publishedAt, description, urlToImage} = article;
    return {
      source: source.name,
      title: title,
      publishedAt: publishedAt,
      description: description,
      imgUrl: urlToImage
    };
  });
  return {type: "SET_ARTICLES", payLoad: articlesArray};
};
export const setIsArticlesLoading = (isLoading) => {
  return {type: "SET_ARTICLES_LOADING", payLoad: isLoading};
};
