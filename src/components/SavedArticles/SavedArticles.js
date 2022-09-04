import ArticlesList from "../ArticlesList/ArticlesList";
import "../SearchArticles/SearchArticles.css";
const SavedArticles = ({isLoggedIn}) => {
  return (
    <section>
      <h3>Saved articles</h3>
      <h2>Elise, you have 5 saved articles</h2>
      <h4>By keywords: Nature, Yellowstone, and 2 other</h4>
      <ArticlesList
        articles={[
          {
            source: "source.name",
            title: "title",
            publishedAt: "sdfdsf",
            description: "description",
            url: "https://robohash.org/dsf",
            imgUrl: `https://robohash.org/${Math.floor(
              Math.random() * 234324234234
            )}`
          },
          {
            source: "source.name",
            title: "title",
            publishedAt: "sdfdsf",
            description: "description",
            url: "url",
            imgUrl: `https://robohash.org/${Math.floor(
              Math.random() * 234324234234
            )}`
          }
        ]}
        isLoggedIn={isLoggedIn}
        isDemoData={true}
      />
    </section>
  );
};
export default SavedArticles;
