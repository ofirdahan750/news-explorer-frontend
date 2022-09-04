import ArticlesList from "../ArticlesList/ArticlesList";

import "./SavedArticles/SavedArticles.css";
const SavedArticles = ({isLoggedIn}) => {
  const demo = [
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
    <ArticlesList articles={demo} isLoggedIn={isLoggedIn} isDemoData={true}>
      <>
        <h3 className="ar">Saved articles</h3>
        <h2>Elise, you have 5 saved articles</h2>
        <h4>By keywords: Nature, Yellowstone, and 2 other</h4>
      </>
    </ArticlesList>
  );
};
export default SavedArticles;
