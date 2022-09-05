import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import ArticleList from "../ArticlesList/ArticlesList.js";
import "../ArticleCard/ArticleCardSearch.css";

import demoData from "../../DemoData/DemoData.json";

import {
  setArticles,
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
  useEffect(() => {
    const searchParmas = params.get("searchParmas");

    if (searchParmas && location.pathname === "/") {
      if (checkStringLength(searchParmas) < 2) {
        debugger;
        navigate("/");
        return;
      }
      dispatch(
        setArticleListSettings({
          isArticlesLoading: true,
          isArticlesSectionActive: true
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
          console.log("err:", err);
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
          isArticlesSectionActive: false
        })
      );
      setIsDemoData(false);
    };

    // eslint-disable-next-line
  }, [params, location.pathname]);

  if (!listSetting.isArticlesSectionActive) return;

  return (
    <ArticleList
      articles={articles}
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
