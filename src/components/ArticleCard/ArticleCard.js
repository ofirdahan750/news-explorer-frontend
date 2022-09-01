import "./ArticleCard.css";
const ArticleCard = ({
  article: {source, title, publishedAt, description, imgUrl}
}) => {
  return (
    <li className="articles-card">
      <article className="articles-card_wrapper">
        <div
          className="articles-card_img-container"
          role="img"
          style={{backgroundImage: `url(${imgUrl})`}}
          aria-label="A photo from the article"
        ></div>
        <div className="articles-card__txt-container">
          <h3 className="articles-card__published-date">{publishedAt}</h3>
          <h2 className="articles-card__title">{title}</h2>
          <p className="articles-card__description">
            {description} {description}
            {description}
          </p>
          <span className="articles-card__source">{source}</span>
        </div>
      </article>
    </li>
  );
};
export default ArticleCard;
