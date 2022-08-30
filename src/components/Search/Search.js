import "./Search.css";
const Search = () => {
  return (
    <section className="search">
      <h1 className="search__heading">What's going on in the world?</h1>
      <h2 className="search__subheading">
        Find the latest news on any topic and save them in your personal
        account.
      </h2>
      <form className="search__form">
        <input className="search__input" placeholder="Enter topic" />
        <button
          type="button"
          className="search__btn background-color-transition btn-link-modifier "
        >
          Search
        </button>
      </form>
    </section>
  );
};
export default Search;
