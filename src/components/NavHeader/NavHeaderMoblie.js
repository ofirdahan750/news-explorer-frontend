import {Link, useLocation} from "react-router-dom";
const NavHeaderMoblie = ({
  isLoggedIn,
  isMoblieMenuOpen,
  setIsMoblieMenuOpen
}) => {
  const location = useLocation();

  return (
    <button
      className="header__moblie-menu-btn btn-link-modifier"
      onClick={() => {
        setIsMoblieMenuOpen(!isMoblieMenuOpen);
      }}
    >
      <img
        src={
          isMoblieMenuOpen
            ? require(`../../images/Header/close.svg`).default
            : require(`../../images/Header/menu.svg`).default
        }
        alt={`A button to ${
          isMoblieMenuOpen ? "close" : "open"
        } the moblie menu`}
      />
    </button>
  );
};

export default NavHeaderMoblie;
{
  /* <nav className="header__nav-container header__nav-container_type_moblie"> */
}
