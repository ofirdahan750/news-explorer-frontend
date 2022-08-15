import {Link} from "react-router-dom";
import "./footer.css";
// import test from '../images/footer/github.svg'
const Footer = () => {
  return (
    <footer>
      <div className="footer__copyright-text">
        {new Date().getFullYear()} Ofir News Explorer, Powered by News API
      </div>
      <nav>
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
            <Link to="/">
              <img src={require("../images/footer/github.svg").default} alt="Github Page Icon"></img>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
