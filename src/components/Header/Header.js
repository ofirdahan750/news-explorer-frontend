import "./Header.css";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import NavHeaderDesktop from "../NavHeader/NavHeaderDesktop.js";
import NavHeaderMoblie from "../NavHeader/NavHeaderMoblie.js";
import MoblieMenuHeader from "../NavHeader/MoblieMenuHeader.js";
import {useSelector} from "react-redux";

const Header = ({isLoggedIn = false, handlePopupToggleView}) => {
  const location = useLocation();
  const [currPathLocation, setCurrPathLocation] = useState("/");
  const [width, setWidth] = useState(window.innerWidth);
  const moblieBreakpoint = 470;
  const [isMoblieMenuOpen, setIsMoblieMenuOpen] = useState(false);
  const {isOpen} = useSelector((state) => state.fromSettingModule);

  useEffect(() => {
    //Fixing humbeger button if user toggle to bigger/smaller screen
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    //Logging out-closing the menu
    if (!isLoggedIn) {
      setIsMoblieMenuOpen(false);
    }
    return () => {
      setIsMoblieMenuOpen(false);
    };
  }, [isLoggedIn]);
  useEffect(() => {
    setCurrPathLocation(location.pathname);
  }, [location.pathname]);
  const setStyleBtn = (elmPathName) => {
    if (location.pathname === elmPathName) {
      return "#FFFFFF";
    }
  };
  return (
    <>
      {width < moblieBreakpoint && isMoblieMenuOpen && isLoggedIn && (
        <MoblieMenuHeader />
      )}
      <header
        className="header"
        style={{backgroundColor: isMoblieMenuOpen && "rgba(26, 27, 34, 1)"}}
      >
        <div className="header__wrapper">
          <div className="header__logo btn-link-modifier">
            <Link to="/">NewsExplorer</Link>
          </div>
          {width > moblieBreakpoint ? (
            <NavHeaderDesktop
              isLoggedIn={isLoggedIn}
              handlePopupToggleView={handlePopupToggleView}
            />
          ) : (
            <NavHeaderMoblie
              isLoggedIn={isLoggedIn}
              setIsMoblieMenuOpen={setIsMoblieMenuOpen}
              isMoblieMenuOpen={isMoblieMenuOpen}
            />
          )}
        </div>
      </header>
    </>
  );
};
export default Header;
