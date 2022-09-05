import ArticlesList from "../ArticlesList/ArticlesList";

import "./SavedArticles/SavedArticles.css";
import "../ArticleCard/ArticleCardSearch.css";
const SavedArticles = ({isLoggedIn}) => {
  const demo = [];
  const demo1 = [
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "https://robohash.org/dsf",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    },
    {
      source: "source.name",
      title: "title",
      publishedAt: "sdfdsf",
      description: "description",
      url: "url",
      imgUrl: "https://i.ytimg.com/vi/UvB2rzswI5Q/maxresdefault.jpg"
    }
  ];
  return (
    <ArticlesList
      articles={demo}
      isLoggedIn={isLoggedIn}
      isDemoData={false}
      type="saved"
    >
      <>
        <h3 className="articles__location-title">Saved articles</h3>
        <h2 className="articles__title">Elise, you have 5 saved articles</h2>
        <h4 className="articles__key-title">
          By keywords:{" "}
          <span className="articles__key-title">
            Nature, Yellowstone, and 2 other
          </span>
        </h4>
      </>
    </ArticlesList>
  );
};
export default SavedArticles;
