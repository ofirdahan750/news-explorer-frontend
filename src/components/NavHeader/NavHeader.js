import {useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./NavHeader.css";
const NavHeader = ({
  isLoggedIn,
  handleLogOutclicked,
  handlePopupToggleView,
  isMoblieMenuOpen
}) => {
  const {pathname} = useLocation();
  const {name} = useContext(CurrentUserContext);
  return (
    <nav className="nav-header__container">
      <button
        type="button"
        className={`nav-header__btn ${
          pathname === "/" &&
          "nav-header__btn_active nav-header__btn_active_theme_bright"
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
          className="nav-header__btn nav-header__btn_type_signin pulsate-bck btn-link-modifier"
        >
          Sign in
        </button>
      ) : (
        <>
          <button
            type="button"
            className={`nav-header__btn ${
              pathname === "/saved-news" &&
              "nav-header__btn_active nav-header__btn_active_theme_dark"
            } pulsate-bck btn-link-modifier`}
          >
            <Link to="/saved-news">Saved articles</Link>
          </button>
          <button
            type="button"
            onClick={handleLogOutclicked}
            className={`nav-header__btn pulsate-bck nav-header__btn_type_signout ${
              pathname === "/"
                ? "nav-header__btn_type_signout_theme_bright"
                : "nav-header__btn_type_signout_theme_dark"
            } btn-link-modifier`}
          >
            <span className="nav-header__logout-text">{name}</span>
            <img
              className="nav-header__logout-icon "
              src={
                pathname === "/" || isMoblieMenuOpen
                  ? require(`../../images/Header/logout_bright_theme.svg`)
                      .default
                  : require(`../../images/Header/logout_dark_theme.svg`).default
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
