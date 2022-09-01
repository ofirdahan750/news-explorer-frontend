import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useSearchParams} from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard.js";
import {
  setArticles,
  setArticleListSetting,
  setArticleListSettings
} from "../../store/actions/articlesAction";
import "./SearchArticles.css";
const SearchArticles = () => {
  const {articles, listSetting} = useSelector((state) => state.articlesModule);

  const [params] = useSearchParams();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const searchParmas = params.get("searchParmas");
    if (searchParmas && location.pathname === "/") {
      dispatch(
        setArticleListSettings({
          isArticlesLoading: true,
          isArticlesSectionActive: true,
          openCardsAmount: 3
        })
      );
      dispatch(setArticles(searchParmas));
      setTimeout(() => {
        dispatch(
          setArticleListSetting({
            settingKey: "isArticlesLoading",
            settingData: false
          })
        );
      }, 0);
      return () => {
        dispatch(
          setArticleListSettings({
            isArticlesLoading: false,
            isArticlesSectionActive: false,
            openCardsAmount: 3
          })
        );
      };
    }
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

  return (
    <section className="articles fade-in">
      <div className="articles__wrapper">
        <h3 className="articles__title">Search results</h3>
        <ul className="articles__list list-modifier">
          {articles.slice(0, listSetting.openCardsAmount).map((article, i) => (
            <ArticleCard key={i} article={article} />
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
