import ArticlesList from "../ArticlesList/ArticlesList";

import "./SavedArticles/SavedArticles.css";
import "../ArticleCard/ArticleCardSearch.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
  setArticleListSetting,
  setArticleListSettings,
  setArticles
} from "../../store/actions/articlesAction";
import mainApi from "../../utils/MainApi";
import {countAndSortArrByKey} from "../../utils/utils.js";
const SavedArticles = ({isLoggedIn}) => {
  const [sortedKeywords, setSortedKeywords] = useState({});
  const {searchArticlesList, savedArticlesList, listSetting} = useSelector(
    (state) => state.articlesModule
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setArticleListSettings({
        isArticlesLoading: true,
        isArticlesSectionActive: true
      })
    );
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
      })
      .finally(() => {
        dispatch(
          setArticleListSetting({
            settingKey: "isArticlesLoading",
            settingData: false
          })
        );
      });
    return () => {
      setArticleListSettings({
        isArticlesLoading: false,
        isArticlesSectionActive: false
      });
    };
  }, []);
  useEffect(() => {
    if (
      !savedArticlesList.length ||
      savedArticlesList[0].source === "Loading..."
    )
      return;
    setSortedKeywords(
      countAndSortArrByKey({arr: savedArticlesList, key: "keyword"})
    );
    return () => {
      setSortedKeywords({});
    };
  }, [savedArticlesList]);

  return (
    <ArticlesList
      articles={savedArticlesList}
      isLoggedIn={isLoggedIn}
      isDemoData={false}
      type="saved"
    >
      <>
        <h3 className="articles__location-title">Saved articles</h3>
        <h2 className="articles__title">Elise, you have 5 saved articles</h2>
        <h4 className="articles__key-title">
          By keywords:
          <span className="articles__key-title">
            {Object.keys(sortedKeywords)[0] &&
              ` ${Object.keys(sortedKeywords)[0]}`}
            {Object.keys(sortedKeywords)[1] &&
              `, ${Object.keys(sortedKeywords)[1]}`}
            {Object.keys(sortedKeywords).length >= 3
              ? ` and ${Object.keys(sortedKeywords).length - 2} other`
              : ""}
            {Object.keys(sortedKeywords).length && "."}
          </span>
        </h4>
      </>
    </ArticlesList>
  );
};
export default SavedArticles;
