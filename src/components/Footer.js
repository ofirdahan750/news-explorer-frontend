import {Link} from "react-router-dom";

import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright-text">
        {new Date().getFullYear()} Ofir News Explorer, Powered by News API
      </div>
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item footer__nav-item_type_text">
            <Link className="btn-link-modifier" to="/">
              <span>Home</span>
            </Link>
          </li>
          <li
            className="footer__nav-item footer__nav-item_type_text"
            style={{margin: "0 41px"}}
          >
            <Link className="btn-link-modifier" to="/">
              <span>Practicum by Yandex</span>
            </Link>
          </li>
          <li className="footer__nav-item footer__nav-item_type_img">
            <a
              className="btn-link-modifier"
              href="https://github.com/ofirdahan750"
              target="_blank"
            >
              <img
                src={require("../images/Footer/github.svg").default}
                alt="Github Page Icon button"
                className="footer__icon"
              />
            </a>
          </li>
          <li className="footer__nav-item footer__nav-item_type_img">
            <a
              className="btn-link-modifier"
              href="https://www.linkedin.com/in/ofir-dahan-8ba3a318a/"
              target="_blank"
            >
              <img
                src={require("../images/Footer/linkedin.svg").default}
                alt="Linkedin page icon button"
                className="footer__icon"
              />
            </a>
          </li>
          <li
            className="footer__nav-item footer__nav-item_type_img"
            style={{margin: 0}}
          >
            <a
              className="btn-link-modifier"
              href="https://www.facebook.com/Ofir.Dahan1/"
              target="_blank"
            >
              <img
                src={require("../images/Footer/facebook.svg").default}
                alt="Facebook page icon button"
                className="footer__icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
