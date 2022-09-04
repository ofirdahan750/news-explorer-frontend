import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import demoData from "../../DemoData/DemoData.json";

import {
  setArticles,
  setArticleListSetting,
  setArticleListSettings
} from "../../store/actions/articlesAction";
import "./SearchArticles.css";
import PreLoader from "../PreLoader/PreLoader.js";
import newsApi from "../../utils/NewsApi.js";
import {checkStringLength} from "../../utils/utils.js";
const SearchArticles = ({isLoggedIn}) => {
  const [isDemoData, setIsDemoData] = useState(false);
  const {articles, listSetting} = useSelector((state) => state.articlesModule);

  const [params] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const searchParmas = params.get("searchParmas");

    if (searchParmas && location.pathname === "/") {
      if (checkStringLength(searchParmas) < 2) {
        navigate("/");
        return;
      }
      dispatch(
        setArticleListSettings({
          isArticlesLoading: true,
          isArticlesSectionActive: true,
          openCardsAmount: 3
        })
      );
      Promise.any([
        newsApi.getSearchArticles({
          searchParmas,
          apiKey: "e8b9e05092bb4f0bb67556814eb1128a"
        }),
        newsApi.getSearchArticles({
          searchParmas,
          apiKey: "b6cb47ff97024dbdb27153bc1b668f1d"
        }),
        newsApi.getSearchArticles({
          searchParmas,
          apiKey: "658c53fde9124b66bd158b518a99dee1"
        }),
        newsApi.getSearchArticles({
          searchParmas,
          apiKey: "3d2609a4fa8b45fda5004ef45fd00a00"
        })
      ])
        .then((res) => {
          setIsDemoData(false);
          dispatch(
            setArticles({
              articles: res.articles,
              isSearchHaveResults: res.totalResults
            })
          );
        })
        .catch((err) => {
          setIsDemoData(true);
          dispatch(
            setArticles({
              articles: demoData.articles,
              isSearchHaveResults: demoData.totalResults
            })
          );
        })
        .finally(() => {
          dispatch(
            setArticleListSetting({
              settingKey: "isArticlesLoading",
              settingData: false
            })
          );
        });
    }

    return () => {
      dispatch(
        setArticleListSettings({
          isArticlesLoading: false,
          isArticlesSectionActive: false,
          openCardsAmount: 3
        })
      );
      setIsDemoData(false);
    };

    // eslint-disable-next-line
  }, [params, location.pathname]);
  const onShowMoreClick = () => {
    const newAmount = listSetting.openCardsAmount + 3;
    dispatch(
      setArticleListSetting({
        settingKey: "openCardsAmount",
        settingData: newAmount
      })
    );
  };
  if (!listSetting.isArticlesSectionActive) return;
  if (listSetting.isArticlesLoading) {
    return (
      <section className="articles articles_loading">
        <PreLoader modifier={"preloader_articles"} />
        <div className="articles__loading-txt">Searching for news...</div>
      </section>
    );
  }
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

  return (
    <section className="articles fade-in">
      <div className="articles__wrapper">
        <h3 className="articles__title">
          Search results
          {isDemoData &&
            "-Something went wrong with your request, So this is a demo data! "}
        </h3>
        <ul className="articles__list list-modifier">
          {articles.slice(0, listSetting.openCardsAmount).map((article, i) => (
            <ArticleCard key={i} article={article} isLoggedIn={isLoggedIn} />
          ))}
        </ul>
        <button
          type="button"
          onClick={onShowMoreClick}
          className="articles__button background-color-transition btn-link-modifier"
        >
          Show more
        </button>
      </div>
    </section>
  );
};
export default SearchArticles;
