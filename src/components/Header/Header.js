import "./Header.css";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import NavHeaderDesktop from "../NavHeader/NavHeaderDesktop.js";
import NavHeaderMoblie from "../NavHeader/NavHeaderMoblie.js";
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
    //Make sure the moblie will disappear
    if (width > moblieBreakpoint) setIsMoblieMenuOpen(false);
  }, [window.innerWidth]);

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
            <button
              type="button"
              className="header__moblie-menu-btn btn-link-modifier"
              onClick={() => {
                setIsMoblieMenuOpen(!isMoblieMenuOpen);
              }}
            >
              <img
                className="header__moblie-menu-img"
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
          )}
        </div>
        {width < moblieBreakpoint && isMoblieMenuOpen && (
          <NavHeaderMoblie
            isLoggedIn={isLoggedIn}
            handlePopupToggleView={handlePopupToggleView}
          />
        )}
      </header>
    </>
  );
};
export default Header;
