import {useState} from "react";
import {useSelector} from "react-redux";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import "../SearchArticles/SearchArticles.css";

import PreLoader from "../PreLoader/PreLoader.js";

const ArticlesList = ({children, isLoggedIn, isDemoData, articles}) => {
  const {listSetting} = useSelector((state) => state.articlesModule);
  const [openCardsAmount, setOpenCardsAmount] = useState(3);
  if (
    listSetting.isArticlesSectionActive &&
    !listSetting.isArticlesLoading &&
    !articles.length
  ) {
    return (
      <section className="articles articles_not-found">
        <div className="articles__not-found-wrapper">
          <img
            src={require("../../images/Article/article_not-found.svg").default}
            alt="a sad emjoi-Not found"
            className="articles__not-found-img"
          />
          <h3 className="articles__not-found-header">Nothing found</h3>
          <p className="articles__not-found-text">
            Sorry, but nothing matched your search terms.
          </p>
        </div>
      </section>
    );
  }

  if (listSetting.isArticlesLoading) {
    return (
      <section className="articles articles_loading">
        <PreLoader modifier={"preloader_articles"} />
        <div className="articles__loading-txt">Searching for news...</div>
      </section>
    );
  }

  return (
    <section className="articles fade-in">
      <div className="articles__wrapper">
        {children}
        {isDemoData && (
          <h3 className="articles__title articles__title_text_err-msg ">
            * Sorry, something went wrong during the request. There may be a
            connection issue or the server may be down. This is a{" "}
            <span style={{fontWeight: "600", textDecoration: "underline"}}>
              demo data ONLY!
            </span>
          </h3>
        )}
        <ul className="articles__list list-modifier">
          {articles.slice(0, openCardsAmount).map((article, i) => (
            <ArticleCard
              key={i}
              article={article}
              isLoggedIn={isLoggedIn}
              isDemoData={isDemoData}
            />
          ))}
        </ul>
        {articles.length >= openCardsAmount && (
          <button
            type="button"
            onClick={(e) => setOpenCardsAmount((prevState) => (prevState += 3))}
            className="articles__button background-color-transition btn-link-modifier"
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
};
export default ArticlesList;
