import {useEffect, useState} from "react";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {checkStringLength} from "../../utils/utils";
import "./Search.css";
const Search = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const location = useLocation();
  const [inputValue, setIsInputValue] = useState("");

  const onSubmitSearch = (e) => {
    e.preventDefault();
    if (inputValue.length < 2) return;
    navigate(`/?searchParmas=${inputValue}`);
  };
  useEffect(() => {
    const searchParmas = params.get("searchParmas");
    if (searchParmas && location.pathname === "/") {
      if (checkStringLength(searchParmas) < 2) {
        navigate("/");
        return;
      } else {
        setIsInputValue(searchParmas);
      }
    }
    return () => {
      setIsInputValue("");
    };
    // eslint-disable-next-line
  }, [params, location.pathname]);

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
          minLength="2"
          onChange={(e) => {
            setIsInputValue(e.target.value);
          }}
          placeholder="Enter topic"
          autoFocus
          required
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
