import React, {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import "./ArticlesList.css";
import PreLoader from "../PreLoader/PreLoader.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import mainApi from "../../utils/MainApi.js";
import {useSearchParams} from "react-router-dom";
import {
  setArticles,
  setSavedArticle
} from "../../store/actions/articlesAction.js";

const ArticlesList = ({children, isLoggedIn, isDemoData, articles, type}) => {
  const {name} = useContext(CurrentUserContext);
  const {listSetting} = useSelector((state) => state.articlesModule);
  const [openCardsAmount, setOpenCardsAmount] = useState(3);

  const [params] = useSearchParams();
  const dispatch = useDispatch();

  const searchParmas = params.get("searchParmas");
  useEffect(() => {
    setOpenCardsAmount(3);
    return () => {
      setOpenCardsAmount(3);
    };
  }, []);

  if (
    listSetting.isArticlesSectionActive &&
    !listSetting.isArticlesLoading &&
    !articles.length
  ) {
    return (
      <section className="articles full-width articles_not-found">
        <div className="articles__not-found-wrapper full-width_type_wrapper">
          <img
            src={require("../../images/Article/article_not-found.svg").default}
            alt="a sad emjoi-Not found"
            className="articles__not-found-img"
          />
          <h3 className="articles__not-found-header">Nothing found</h3>
          <p className="articles__not-found-text">
            {type === "search"
              ? `Sorry${
                  (name !== "Loading..." && ` ${name}`) || ""
                }, but nothing matched your search terms.`
              : "You don't have any saved articles"}
          </p>
        </div>
      </section>
    );
  }
  const handleSavedSubmit = ({article, isSaved}) => {
    if (!isSaved) {
      article.keyword = searchParmas || false;
      mainApi
        .onSaveArticle(article)
        .then((res) => {
          dispatch(setSavedArticle(res));
        })

        .catch((err) => {
          console.log(`Error : ${err}`);
        });
    } else {
      mainApi
        .onDeleteArticle(article)
        .then((res) => {
          mainApi.getSavedArticles().then((res) => {
            dispatch(
              setArticles({
                articles: res,
                key: "savedArticlesList"
              })
            );
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  if (listSetting.isArticlesLoading) {
    return (
      <section className="articles full-width articles_loading">
        <PreLoader modifier={"preloader_articles"} />
        <div className="articles__loading-txt">Searching for news...</div>
      </section>
    );
  }
  if (!listSetting.isArticlesSectionActive) return;

  return (
    <>
      {type === "saved" && children}
      <section className={`articles full-width articles_type_${type} fade-in`}>
        <div className="articles__wrapper full-width_type_wrapper">
          {type === "search" && children}
          {isDemoData && (
            <h3 className="articles__title articles__title_type_err-msg ">
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
                type={type}
                handleSubmit={handleSavedSubmit}
              />
            ))}
          </ul>
          {articles.length > openCardsAmount && (
            <button
              type="button"
              onClick={(e) =>
                setOpenCardsAmount((prevState) => (prevState += 3))
              }
              className="articles__button background-color-transition btn-link-modifier"
            >
              Show more
            </button>
          )}
        </div>
      </section>
    </>
  );
};
export default ArticlesList;
