import { Link } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './Footer.styles';

import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <Wrapper>
      <span>Engrandy</span>
      <div className="footer-blocks">
        <div className="footer-blocks__block">
          <h3>About us</h3>
          <ul>
            <Link to="/">
              <li>About us</li>
            </Link>
            <Link to="/">
              <li>How we work</li>
            </Link>
            <Link to="/">
              <li>Our values</li>
            </Link>
          </ul>
        </div>
        <div className="footer-blocks__block">
          <h3>Services</h3>
          <ul>
            <Link to="/">
              <li>Creating web applications</li>
            </Link>
            <Link to="/">
              <li>Creating SPA websites</li>
            </Link>
            <Link to="/">
              <li>Creating portfolio pages</li>
            </Link>
          </ul>
        </div>
        <div className="footer-blocks__block">
          <h3>Language</h3>
          <ul>
            <Link to="/">
              <li>EN</li>
            </Link>
            <Link to="/">
              <li>PL</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="socials">
        <FaFacebookF />
        <FaFacebookF />
        <FaFacebookF />
        <FaFacebookF />
      </div>
      <div className="copyright">
        &copy; 2022 Engrandy. All rights reserved.
      </div>
    </Wrapper>
  );
};

export default Footer;
