import React, {useEffect, useLayoutEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import ArticleList from "../ArticlesList/ArticlesList.js";
import "../ArticleCard/ArticleCardSearch.css";

import mainApi from "../../utils/MainApi.js";

import demoData from "../../DemoData/DemoData.json";

import {
  setArticles,
  setArticlesApi,
  setArticleListSetting,
  setArticleListSettings
} from "../../store/actions/articlesAction";
import "./SearchArticles.css";
import newsApi from "../../utils/NewsApi.js";
import {checkStringLength} from "../../utils/utils.js";
const SearchArticles = ({isLoggedIn}) => {
  const [isDemoData, setIsDemoData] = useState(false);
  const {articles, listSetting} = useSelector((state) => state.articlesModule);

  const [params] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchParmas = params.get("searchParmas");
  const lastSearchArticles =
    JSON.parse(localStorage.getItem("lastSearchArticles")) || "";
  const lastSearchSettings =
    JSON.parse(localStorage.getItem("lastSearchSettings")) || "";
  const oneDay = new Date().getTime() + 1 * 24 * 60 * 60 * 1000; //Make sure One day top

  const handleLocalStorage = () => {
    if (articles.length && !isDemoData) {
      localStorage.setItem("lastSearchArticles", JSON.stringify(articles));
      localStorage.setItem(
        "lastSearchSettings",
        JSON.stringify({
          keyword: searchParmas,
          timeStamp: Date.now()
        })
      );
    }
  };

  useLayoutEffect(() => {
    if (!articles.length) return;
    if (lastSearchSettings.keyword !== searchParmas) {
      handleLocalStorage(searchParmas);
    }
  }, [articles]);

  useEffect(() => {
    if (searchParmas && searchParmas !== "" && location.pathname === "/") {
      if (checkStringLength(searchParmas) < 2) {
        navigate("/");
        return;
      }
      dispatch(
        setArticleListSettings({
          isArticlesLoading: true,
          isArticlesSectionActive: true
        })
      );

      if (
        lastSearchSettings.timeStamp <= oneDay &&
        lastSearchSettings.keyword === searchParmas &&
        lastSearchArticles.length
      ) {
        setArticlesByLocalStorage(lastSearchArticles);
      } else {
        setArticlesByApi(searchParmas);
      }
    }

    return () => {
      dispatch(
        setArticleListSettings({
          isArticlesLoading: false,
          isArticlesSectionActive: false
        })
      );
      setArticles([]);
      setIsDemoData(false);
    };

    // eslint-disable-next-line
  }, [params, location.pathname]);

  const setArticlesByLocalStorage = (lastSearchArticles) => {
    dispatch(setArticles(lastSearchArticles));
    dispatch(
      setArticleListSetting({
        settingKey: "isArticlesLoading",
        settingData: false
      })
    );
  };
  const setArticlesByApi = (searchParmas) => {
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
          setArticlesApi({
            articles: res.articles,
            isSearchHaveResults: res.totalResults
          })
        );
      })
      .catch((err) => {
        console.log("err:", err);
        setIsDemoData(true);
        dispatch(
          setArticlesApi({
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
  };
  const handleSubmitToggle = (article) => {
    console.log("article:", article);
    article.keyword = searchParmas;
    mainApi.onSaveArticle(article).then((res) => {
      console.log("res:", res);
    });
  };

  return (
    <ArticleList
      articles={articles}
      isLoggedIn={isLoggedIn}
      isDemoData={isDemoData}
      handleSubmit={handleSubmitToggle}
      type="search"
    >
      <h3 className="articles__title articles__title_text_search-results">
        Search results
      </h3>
    </ArticleList>
  );
};
export default SearchArticles;
