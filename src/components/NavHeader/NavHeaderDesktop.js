import {useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./NavHeader.css";
const NavHeaderDesktop = ({
  isLoggedIn,
  handleLogOutclicked,
  handlPopupToggle
}) => {
  const location = useLocation();
  const {email} = useContext(CurrentUserContext);
  return (
    <nav className="header__nav-container header__nav-container_type_desktop">
      <button
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
          onClick={handlPopupToggle}
          className="header__nav-btn header__nav-btn_type_signin btn-link-modifier "
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
