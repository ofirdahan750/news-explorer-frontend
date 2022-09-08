import React, {useState} from "react";
import {useSelector} from "react-redux";
import useEffectSkipInitialRender from "../../hooks/useEffectSkipInitialRender";
import {useToggle} from "../../hooks/useToggle";
import "./ArticleCard.css";
const ArticleCard = ({
  article: {source, title, date, text, image, link},
  isLoggedIn,
  isDemoData,
  handleSubmit,
  type
}) => {
  const [isButtonHover, setIsButtonHover] = useState(false);
  // const [isSaved, setIsSaved] = useState(false);
  const {savedArticlesList} = useSelector((state) => state.articlesModule);

  const [isSaved, setIsSaved] = useToggle();

  useEffectSkipInitialRender(() => {
    if (!savedArticlesList.length || isSaved) return;
    if (type === "saved") {
      setIsSaved();
    } else {
      if (
        isLoggedIn &&
        !isDemoData &&
        savedArticlesList[0].title !== "Loading..."
      ) {
        if (
          savedArticlesList.some((article) => {
            console.log("title: " + title, +" " + article.link === link);
            return article.link === link;
          })
        ) {
          setIsSaved();
        }
      }
    }
  }, [savedArticlesList.length]);
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
          <div className="article-card__saved-wrapper">
            <button
              className="article-card__saved-btn btn-link-modifier"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (isDemoData || !isLoggedIn) {
                  return;
                }
                handleSubmit({
                  article:
                    type === "search"
                      ? {source, title, date, text, image, link}
                      : {},
                  isSaved
                });
              }}
              onMouseOver={() => setIsButtonHover(true)}
              onMouseOut={() => setIsButtonHover(false)}
            >
              <img
                src={
                  isSaved
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
          </div>
        </div>
        <div className="article-card__txt-container">
          <h3 className="article-card__published-date">{date}</h3>
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
