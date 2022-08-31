import {useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import {capitalizeFirstLetter} from "../../utils/utils";
import "./NavHeader.css";
const NavHeader = ({
  isLoggedIn,
  handleLogOutclicked,
  handlePopupToggleView,
  isMoblieMenuOpen
}) => {
  const location = useLocation();
  const {name} = useContext(CurrentUserContext);
  return (
    <nav className="nav-header__container">
      <button
        type="button"
        className={`nav-header__btn ${
          location.pathname === "/" && "nav-header__btn_active"
        } pulsate-bck btn-link-modifier`}
      >
        <Link to="/">Home</Link>
      </button>
      {!isLoggedIn ? (
        <button
          type="button"
          onClick={() => {
            handlePopupToggleView("login");
          }}
          className="nav-header__btn pulsate-bck nav-header__btn_type_signin btn-link-modifier "
        >
          Sign in
        </button>
      ) : (
        <>
          <button
            type="button"
            className={`nav-header__btn ${
              location.pathname === "/saved-news" && "nav-header__btn_active"
            } pulsate-bck btn-link-modifier`}
          >
            <Link to="/saved-news">Saved articles</Link>
          </button>
          <button
            type="button"
            onClick={handleLogOutclicked}
            className="nav-header__btn pulsate-bck nav-header__btn_type_signout btn-link-modifier "
          >
            <span className="nav-header__logout-text">
              {capitalizeFirstLetter(name)}
            </span>
            <img
              className="nav-header__logout-icon "
              src={
                !isMoblieMenuOpen || location.pathname === "/saved-news"
                  ? require(`../../images/Header/logout_black_theme.svg`)
                      .default
                  : require(`../../images/Header/logout_white_theme.svg`)
                      .default
              }
              alt={`Log out button icon`}
            />
          </button>
        </>
      )}
    </nav>
  );
};
export default NavHeader;
