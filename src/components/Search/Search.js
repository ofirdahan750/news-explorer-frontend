import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Search.css";
const Search = () => {
  const navigate = useNavigate();
  const [inputValue, setiInputValue] = useState("");
  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (!inputValue.length) return;
    navigate(`/?searchParmas=${inputValue}`);
  };
  return (
    <section className="search">
      <h1 className="search__heading">What's going on in the world?</h1>
      <h2 className="search__subheading">
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <form className="search__form" onSubmit={onSubmitSearch}>
        <input
          className="search__input"
          value={inputValue}
          onChange={(e) => {
            setiInputValue(e.target.value);
          }}
          placeholder="Enter topic"
        />
        <button
          type="submit"
          className="search__btn background-color-transition btn-link-modifier"
        >
          Search
        </button>
      </form>
    </section>
  );
};
export default Search;
