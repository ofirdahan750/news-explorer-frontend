import React, {useState} from "react";
import "./ArticleCard.css";
const ArticleCard = ({
  article: {source, title, publishedAt, description, imgUrl, url}
}) => {
  const [isButtonHover, setIsButtonHover] = useState(false);
  return (
    <li className="article-card fade-in scale-hover">
      <article className="article-card_wrapper">
        <div
          className="article-card_img-container"
          role="img"
          aria-label="A photo from the article"
          style={{backgroundImage: `url(${imgUrl})`}}
          rel="noreferrer"
          target="_black"
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          <button
            className="article-card__saved-btn btn-link-modifier"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onMouseOver={() => setIsButtonHover(true)}
            onMouseOut={() => setIsButtonHover(false)}
          >
            <img
              src={
                isButtonHover
                  ? require("../../images/Article/bookmark_icons/bookmark-notsaved-black.svg")
                      .default
                  : require("../../images/Article/bookmark_icons/bookmark-notsaved-gray.svg")
                      .default
              }
              alt="Add/Remove to saved article "
              className="article-card__saved-btn-icon "
            />
          </button>
          <div></div>
        </div>
        <div className="article-card__txt-container">
          <h3 className="article-card__published-date">{publishedAt}</h3>
          <h2 className="article-card__title">{title}</h2>
          <p className="article-card__description">{`${description}${description}`}</p>
          <a
            rel="noreferrer"
            target="_black"
            href={url}
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
