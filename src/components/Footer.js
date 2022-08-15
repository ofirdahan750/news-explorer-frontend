import {Link} from "react-router-dom";

import "./footer.css";
const Footer = () => {  
  return (
    <footer className="footer">
      <div className="footer__copyright-text">
        {new Date().getFullYear()} Ofir News Explorer, Powered by News API
      </div>
      <nav className="footer__nav">
        <ul>
          <li>
            <Link to="/">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Practicum by Yandex</span>
            </Link>
          </li>
          <li>
            <a href="https://github.com/ofirdahan750" target="_blank">
              <img
                src={require("../images/Footer/github.svg").default}
                alt="Github Page Icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
