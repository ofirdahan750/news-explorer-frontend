import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {capitalizeFirstLetter} from "../../utils/utils";
import "./ArticleCard.css";
const ArticleCard = ({
  article: {source, title, date, text, image, link, _id = "", keyword = ""},
  isLoggedIn,
  isDemoData,
  handleSubmit,
  type
}) => {
  const [isButtonHover, setIsButtonHover] = useState(false);
  const [articleId, setArticleId] = useState("");
  const [articleKey, setArticleKey] = useState("");
  const {savedArticlesList} = useSelector((state) => state.articlesModule);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (!savedArticlesList.length || savedArticlesList[0].title === "Loading") {
      setIsSaved(false);
      return;
    }
    if (type === "saved") {
      setIsSaved(true);
      setArticleId(_id);
      setArticleKey(keyword);
      return;
    }
    if (isLoggedIn && !isDemoData) {
      const matchedCard =
        savedArticlesList.find((article) => article.link === link) || false;
      if (matchedCard) {
        setIsSaved(true);
        setArticleId(matchedCard._id);
        setArticleKey(matchedCard.keyword);
      } else {
        setIsSaved(false);
        setArticleId("");
      }
    }
    // eslint-disable-next-line
  }, [savedArticlesList]);
  if (!title || title === "Loading...") return;

  return (
    <li className="article-card fade-in">
      <article className="article-card_wrapper scale-hover">
        <div
          className="article-card_img-container"
          role="img"
          aria-label="A photo from the article"
          style={{backgroundImage: `url(${image})`}}
          rel="noreferrer"
          target="_black"
          onClick={() => {
            window.open(link, "_blank");
          }}
        >
          <div
            className={`article-card__saved-wrapper ${
              isSaved ? "article-card_wrapper_type_saved" : ""
            }`}
          >
            <button
              className="article-card__saved-btn btn-link-modifier"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (isDemoData || !isLoggedIn) {
                  return;
                }
                handleSubmit({
                  article: !isSaved
                    ? {source, title, date, text, image, link}
                    : articleId,
                  isSaved
                });
              }}
              onMouseOver={() => setIsButtonHover(true)}
              onMouseOut={() => setIsButtonHover(false)}
            >
              <img
                src={
                  type === "saved"
                    ? require("../../images/Article/bookmark_icons/trash.svg")
                        .default
                    : isSaved
                    ? require("../../images/Article/bookmark_icons/bookmark-blue.svg")
                        .default
                    : isButtonHover
                    ? require("../../images/Article/bookmark_icons/bookmark-notsaved-black.svg")
                        .default
                    : require("../../images/Article/bookmark_icons/bookmark-notsaved-gray.svg")
                        .default
                }
                alt="Add/Remove to saved article"
                className="article-card__saved-btn-icon "
              />
            </button>

            <span
              className={`article-card__saved-message ${
                isButtonHover &&
                (!isLoggedIn || isDemoData) &&
                "slide-in-right message_visible"
              }`}
            >
              {isDemoData ? "Can't save demo card" : "Sign in to save articles"}
            </span>
            {isSaved && (
              <span
                className={`article-card__saved-message article-card__key-message slide-in-right message_visible`}
              >
                {capitalizeFirstLetter(articleKey)}
              </span>
            )}
          </div>
        </div>
        <div className="article-card__txt-container">
          <div className="article-card__published-date">{date}</div>
          <h2 className="article-card__title">{title}</h2>
          <p className="article-card__description">{`${text}`}</p>
          <a
            rel="noreferrer"
            target="_black"
            href={link}
            className="article-card__source btn-link-modifier"
          >
            {source}
          </a>
        </div>
      </article>
    </li>
  );
};
export default ArticleCard;
