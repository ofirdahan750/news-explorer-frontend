import "./Header.css";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";

import NavHeader from "../NavHeader/NavHeader.js";

const Header = ({isLoggedIn, handlePopupToggleView, handleLogOutclicked}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const moblieBreakpoint = 676;
  const [isMoblieMenuOpen, setIsMoblieMenuOpen] = useState(false);
  const {pathname} = useLocation();
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
    if (width <= moblieBreakpoint) setIsMoblieMenuOpen(false);
  }, [width]);

  return (
    <>
      <header
        className={`header ${
          pathname === "/" || isMoblieMenuOpen
            ? "header_theme_bright"
            : "header_theme_dark"
        }`}
        style={{backgroundColor: isMoblieMenuOpen && "rgba(26, 27, 34, 1)"}}
      >
        <div className="header__wrapper">
          <div className="header__logo btn-link-modifier">
            <Link to="/">NewsExplorer</Link>
          </div>
          {width > moblieBreakpoint ? (
            <NavHeader
              isLoggedIn={isLoggedIn}
              handlePopupToggleView={handlePopupToggleView}
              handleLogOutclicked={handleLogOutclicked}
              isMoblieMenuOpen={isMoblieMenuOpen}
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
                    : pathname === "/"
                    ? require("../../images/Header/menu_theme_bright.svg")
                        .default
                    : require("../../images/Header/menu_theme_dark.svg").default
                }
                alt={`A button to ${
                  isMoblieMenuOpen ? "close" : "open"
                } the moblie menu`}
              />
            </button>
          )}
        </div>
        {width < moblieBreakpoint && isMoblieMenuOpen && (
          <NavHeader
            isLoggedIn={isLoggedIn}
            handlePopupToggleView={handlePopupToggleView}
            handleLogOutclicked={handleLogOutclicked}
            isMoblieMenuOpen={isMoblieMenuOpen}
          />
        )}
      </header>
    </>
  );
};
export default Header;
