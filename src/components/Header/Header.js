import "./Header.css";
import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import NavHeaderDesktop from "../NavHeader/NavHeaderDesktop.js";
import NavHeaderMoblie from "../NavHeader/NavHeaderMoblie.js";
import MoblieMenuHeader from "../NavHeader/MoblieMenuHeader.js";

const Header = ({
  isLoggedIn = false,
  handleLogOutclicked = () => {
    return console.log("wow");
  }
}) => {
  const location = useLocation();
  const [currPathLocation, setCurrPathLocation] = useState("/");
  const [width, setWidth] = useState(window.innerWidth);
  const moblieBreakpoint = 1;
  const [isMoblieMenuOpen, setIsMoblieMenuOpen] = useState(false);
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
        <MoblieMenuHeader handleLogOutclicked={handleLogOutclicked} />
      )}
      <header className="header">
        <div className="header__wrapper">
          <div className="header__logo btn-link-modifier">
            <Link to="/">NewsExplorer</Link>
          </div>
          {width > moblieBreakpoint ? (
            <NavHeaderDesktop
              handleLogOutclicked={handleLogOutclicked}
              isLoggedIn={isLoggedIn}
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