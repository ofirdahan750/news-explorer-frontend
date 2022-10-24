import {Link} from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright-text">
        {new Date().getFullYear()} Ofir News Explorer, Powered by News API
      </div>
      <nav className="footer__nav-list">
        <Link
          className="footer__nav-item-txt footer__nav-item_grid-area_home btn-link-modifier"
          to="/"
        >
          <span>Home</span>
        </Link>
        <a
          href="https://practicum.com"
          target="_blank"
          rel="noreferrer"
          className="footer__nav-item-txt footer__nav-item_grid-area_practicum btn-link-modifier"
        >
          Practicum
        </a>
        <a
          className="footer__nav-item-icon footer__nav-item_grid-area_github shake-horizontal btn-link-modifier"
          href="https://github.com/ofirdahan750"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../images/Footer/github.svg").default}
            alt="Github Page Icon button"
            className="footer__icon"
          />
        </a>
        <a
          className="footer__nav-item-icon footer__nav-item_grid-area_linkedin shake-horizontal btn-link-modifier"
          href="https://www.linkedin.com/in/ofir-dahan-8ba3a318a/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../images/Footer/linkedin.svg").default}
            alt="Linkedin page icon button"
            className="footer__icon"
          />
        </a>
        <a
          className="footer__nav-item-icon footer__nav-item_grid-area_facebook shake-horizontal btn-link-modifier"
          href="https://www.facebook.com/Ofir.Dahan1/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../images/Footer/facebook.svg").default}
            alt="Facebook page icon button"
            className="footer__icon"
          />
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
