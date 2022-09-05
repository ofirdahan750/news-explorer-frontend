import ArticlesList from "../ArticlesList/ArticlesList";

import "./SavedArticles/SavedArticles.css";
import "../ArticleCard/ArticleCardSearch.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  setArticleListSetting,
  setArticleListSettings,
  setArticles
} from "../../store/actions/articlesAction";
import mainApi from "../../utils/MainApi";
const SavedArticles = ({isLoggedIn}) => {
  const {articles, listSetting} = useSelector((state) => state.articlesModule);
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
        dispatch(setArticles(res.articles));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setArticles([]));
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
      dispatch(setArticles([]));
      setArticleListSetting({
        settingKey: "isArticlesLoading",
        settingData: false
      });
    };
  }, []);

  return (
    <ArticlesList
      articles={articles}
      isLoggedIn={isLoggedIn}
      isDemoData={false}
      type="saved"
    >
      <>
        <h3 className="articles__location-title">Saved articles</h3>
        <h2 className="articles__title">Elise, you have 5 saved articles</h2>
        <h4 className="articles__key-title">
          By keywords:{" "}
          <span className="articles__key-title">
            Nature, Yellowstone, and 2 other
          </span>
        </h4>
      </>
    </ArticlesList>
  );
};
export default SavedArticles;
