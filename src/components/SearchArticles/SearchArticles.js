import React, {useEffect, useState} from "react";
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
import useEffectSkipInitialRender from "../../hooks/useEffectSkipInitialRender.js";
import {oneDay} from "../../utils/constants.js";
import {saveToStorage, getFromStorage} from "../../utils/StorageService.js";
const SearchArticles = ({isLoggedIn}) => {
  const [isDemoData, setIsDemoData] = useState(false);
  const {searchArticlesList, savedArticlesList} = useSelector(
    (state) => state.articlesModule
  );

  const [params] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchParmas = params.get("searchParmas");

  const lastSearchArticles = getFromStorage("lastSearchArticles") || "";
  const lastSearchSettings = getFromStorage("lastSearchSettings") || "";
  const isOneDayOld = lastSearchSettings.timeStamp >= oneDay; //Make sure One day top
  useEffectSkipInitialRender(() => {
    if (
      lastSearchSettings.keyword !== searchParmas &&
      searchArticlesList.length &&
      searchArticlesList[0].title !== "Loading..." &&
      !isDemoData
    ) {
      saveToStorage("lastSearchArticles", searchArticlesList);
      saveToStorage("lastSearchSettings", {
        keyword: searchParmas,
        timeStamp: Date.now()
      });
    }
    // eslint-disable-next-line
  }, [
    lastSearchSettings.keyword !== searchParmas &&
      searchArticlesList.length &&
      searchArticlesList[0].title !== "Loading..." &&
      !isDemoData
  ]);

  useEffect(() => {
    if (
      searchParmas &&
      (checkStringLength(searchParmas) < 2 ||
        checkStringLength(searchParmas) > 42)
    ) {
      navigate("/");
      return;
    }
    if (searchParmas && location.pathname === "/") {
      dispatch(
        setArticleListSettings({
          isArticlesLoading: true,
          isArticlesSectionActive: true
        })
      );
      if (
        !isOneDayOld &&
        lastSearchSettings.keyword === searchParmas &&
        lastSearchArticles.length
      ) {
        setArticlesByLocalStorage(lastSearchArticles);
      } else {
        setArticlesByApi(searchParmas);
      }

      if (!savedArticlesList || savedArticlesList[0].title === "Loading...") {
        mainApi

          .getSavedArticles()
          .then((res) => {
            dispatch(
              setArticles({
                articles: res,
                key: "savedArticlesList"
              })
            );
          })
          .catch((err) => {
            console.log(err);
            setArticles({
              articles: [],
              key: "savedArticlesList"
            });
          });
      }
    }

    return () => {
      setArticles({article: [], key: "searchArticlesList"});
      setArticleListSettings({
        isArticlesLoading: false,
        isArticlesSectionActive: false
      });
    };
    // eslint-disable-next-line
  }, [params, location.pathname]);

  const setArticlesByLocalStorage = () => {
    console.log("Storage");

    dispatch(
      setArticles({articles: lastSearchArticles, key: "searchArticlesList"})
    );
    dispatch(
      setArticleListSetting({
        settingKey: "isArticlesLoading",
        settingData: false
      })
    );
  };
  const setArticlesByApi = () => {
    console.log("api");
    Promise.any([
      newsApi.getSearchArticles({
        apiKey: "e8b9e05092bb4f0bb67556814eb1128a"
      }),
      newsApi.getSearchArticles({
        apiKey: "b6cb47ff97024dbdb27153bc1b668f1d"
      }),
      newsApi.getSearchArticles({
        apiKey: "658c53fde9124b66bd158b518a99dee1"
      }),
      newsApi.getSearchArticles({
        apiKey: "3d2609a4fa8b45fda5004ef45fd00a00"
      })
    ])
      .then((res) => {
        console.log("res:", res);
        setIsDemoData(false);
        dispatch(
          setArticlesApi({
            articles: res.articles,
            isSearchHaveResults: res.totalResults,
            key: "searchArticlesList"
          })
        );
      })
      .catch((err) => {
        console.log("err:", err);
        setIsDemoData(true);
        dispatch(
          setArticlesApi({
            articles: demoData.articles,
            isSearchHaveResults: demoData.totalResults,
            key: "searchArticlesList"
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

  if (!searchParmas) return;
  return (
    <ArticleList
      articles={searchArticlesList}
      isLoggedIn={isLoggedIn}
      isDemoData={isDemoData}
      type="search"
    >
      <h3 className="articles__title articles__title_text_search-results">
        Search results
      </h3>
    </ArticleList>
  );
};
export default SearchArticles;
