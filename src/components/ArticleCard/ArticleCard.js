import "./ArticleCard.css";
const ArticleCard = ({
  article: {source, title, publishedAt, description, imgUrl, url}
}) => {
  return (
    <li className="articles-card fade-in scale-hover">
      <article className="articles-card_wrapper">
        <div
          className="articles-card_img-container"
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
            className="articles-card__saved-btn btn-link-modifier"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <img
              src={
                require("../../images/Article/bookmark_icons/bookmark-notsaved-gray.svg")
                  .default
              }
              alt="Add/Remove to saved article "
              className="articles-card__saved-btn-icon "
              onMouseOver={(e) => {
                e.target.src =
                  require("../../images/Article/bookmark_icons/bookmark-notsaved-black.svg").default;
              }}
              onMouseOut={(e) => {
                e.target.src =
                  require("../../images/Article/bookmark_icons/bookmark-notsaved-gray.svg").default;
              }}
            />
          </button>
        </div>
        <div className="articles-card__txt-container">
          <h3 className="articles-card__published-date">{publishedAt}</h3>
          <h2 className="articles-card__title">{title}</h2>
          <p className="articles-card__description">{description}</p>
          <a
            rel="noreferrer"
            target="_black"
            href={url}
            className="articles-card__source btn-link-modifier"
          >
            {source}
          </a>
        </div>
      </article>
    </li>
  );
};
export default ArticleCard;
