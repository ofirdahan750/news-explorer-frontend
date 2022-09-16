import ArticlesList from "../ArticlesList/ArticlesList";

import "./SavedArticles/SavedArticles.css";
import "../ArticleCard/ArticleCardSearch.css";
import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import {
  setArticleListSetting,
  setArticleListSettings,
  setArticles
} from "../../store/actions/articlesAction";
import mainApi from "../../utils/MainApi";
import {countAndSortArrByKey} from "../../utils/utils.js";
import CurrentUserContext from "../../contexts/CurrentUserContext";
const SavedArticles = ({isLoggedIn}) => {
  const [sortedKeywords, setSortedKeywords] = useState({});
  const {name} = useContext(CurrentUserContext);
  const {savedArticlesList} = useSelector((state) => state.articlesModule);
  const dispatch = useDispatch();
  useEffect(() => {
    if (savedArticlesList[0].title === "Loading...") {
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
    }

    return () => {
      setArticleListSettings({
        isArticlesLoading: false,
        isArticlesSectionActive: false
      });
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (
      !savedArticlesList.length ||
      savedArticlesList[0].source === "Loading..."
    )
      return;
    setSortedKeywords(
      Object.keys(
        countAndSortArrByKey({arr: savedArticlesList, key: "keyword"})
      ) || ""
    );
    return () => {
      setSortedKeywords({});
    };
  }, [savedArticlesList]);
  if (!isLoggedIn) return;
  return (
    <ArticlesList
      articles={savedArticlesList}
      isLoggedIn={isLoggedIn}
      isDemoData={false}
      type="saved"
    >
      <div className="articles__wrapper full-width_type_wrapper">
        <h3 className="articles__location-title">Saved articles</h3>
        <h2 className="articles__title articles__title_type_saved">
          {name}, you have {savedArticlesList.length} saved articles
        </h2>
        <h4 className="articles__key-title">
          By keywords:
          <span className="articles__key-title articles__key-title_elm_span">
            {sortedKeywords[0] && ` ${sortedKeywords[0]}`}
            {sortedKeywords[1] && `, ${sortedKeywords[1]}`}
            {sortedKeywords.length >= 3
              ? ` and ${sortedKeywords.length - 2} other`
              : ""}
            .
          </span>
        </h4>
      </div>
    </ArticlesList>
  );
};
export default SavedArticles;
