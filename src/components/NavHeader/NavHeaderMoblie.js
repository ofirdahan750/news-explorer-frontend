import {Link, useLocation} from "react-router-dom";
const NavHeaderMoblie = ({
  isLoggedIn,
  isMoblieMenuOpen,
  setIsMoblieMenuOpen
}) => {
  const location = useLocation();

  return (
    <>
      <nav className="header__nav-container header__nav-container_type_moblie">
        {isLoggedIn && (
          <div className="header__nav-loggedout_type_moblie link-modifier ">
            <Link to="/signup">Sign in</Link>
          </div>
        )}
      </nav>
      {!isLoggedIn && (
        <>
          {!isMoblieMenuOpen ? (
            <button
              className="header__moblie-menu-btn btn-link-modifier"
              onClick={() => {
                setIsMoblieMenuOpen(true);
              }}
            >
              <img
                src={require("../../images/Header/menu.svg").default}
                alt="Open navbar menu"
              />
            </button>
          ) : (
            <button
              className="header__moblie-menu-btn button-modifier animation-modifier_type_opacity-hover btn-link-modifier"
              onClick={() => {
                setIsMoblieMenuOpen(false);
              }}
            >
              <img
                src={require("../../images/Header/close.svg").default}
                alt="Open navbar menu"
              />
            </button>
          )}
        </>
      )}
    </>
  );
};

export default NavHeaderMoblie;
