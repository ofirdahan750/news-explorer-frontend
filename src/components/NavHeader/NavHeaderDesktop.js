import {useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./NavHeader.css";
import "./NavHeaderDesktop.css";
const NavHeaderDesktop = ({
  isLoggedIn,
  handleLogOutclicked,
  handlePopupToggleView
}) => {
  const location = useLocation();
  const {email} = useContext(CurrentUserContext);
  return (
    <nav className="header__nav-container">
      <button
        type="button"
        className="header__nav-btn btn-link-modifier"
        style={{
          borderBottom: "3px solid #FFFFFF",
          height: "100%",
          borderTop: "3px transparent"
        }}
      >
        <Link to="/">Home</Link>
      </button>
      {!isLoggedIn && (
        <button
          type="button"
          onClick={() => {
            handlePopupToggleView("login");
          }}
          className="header__nav-btn  header__nav-btn_type_signin btn-link-modifier "
        >
          Sign in
        </button>
      )}

      {isLoggedIn && email && (
        <div className="header__nav-user-loggedin">
          <span className="header__nav-user-email">{email}</span>
          <span className="header__logout-btn" onClick={handleLogOutclicked}>
            Log out
          </span>
        </div>
      )}
    </nav>
  );
};
export default NavHeaderDesktop;
