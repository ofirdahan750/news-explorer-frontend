import {useEffect} from "react";
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
          dispatch(
            setArticles({
              articles: res.articles,
              isSearchHaveResults: res.totalResults
            })
          );
        })
        .catch((err) => {
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
      <section className="articles article_loading">
        <PreLoader modifier={"preloader_article"} />
        <div className="articles__loading-txt">Searching for news...</div>
      </section>
    );
  }
  return (
    <section className="articles fade-in">
      <div className="articles__wrapper">
        {articles.length &&
        !listSetting.isArticlesLoading &&
        listSetting.isArticlesSectionActive ? (
          <>
            <h3 className="articles__title">Search results</h3>
            <ul className="articles__list list-modifier">
              {articles
                .slice(0, listSetting.openCardsAmount)
                .map((article, i) => (
                  <ArticleCard
                    key={i}
                    article={article}
                    isLoggedIn={isLoggedIn}
                  />
                ))}
            </ul>
            <button
              type="button"
              onClick={onShowMoreClick}
              className="articles__button background-color-transition btn-link-modifier"
            >
              Show more
            </button>
          </>
        ) : (
          <div>wow</div>
        )}
      </div>
    </section>
  );
};
export default SearchArticles;
