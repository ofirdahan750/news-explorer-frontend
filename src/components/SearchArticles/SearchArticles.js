import {useSelector} from "react-redux";
import "./SearchArticles.css";
const SearchArticles = () => {
  const articles = useSelector((state) => state.articlesModule);
  console.log("x:", articles);
  return (
    <section className="articles">
      <h3 className="articles__title">Search results</h3>
      <ul className="list-modifier">
        <li>
          <article>
            <div></div>
            <h3></h3>
            <h2></h2>
            <p></p>
            <span></span>
          </article>
        </li>
      </ul>
      <button className="btn-link-modifier">Show more</button>
    </section>
  );
};
export default SearchArticles;
