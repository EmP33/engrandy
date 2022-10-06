import { Link } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './Footer.styles';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <span>Engrandy</span>
      <div className="footer-blocks">
        <div className="footer-blocks__block">
          <h3>{t('About us')}</h3>
          <ul>
            <Link to="/">
              <li>{t('About us')}</li>
            </Link>
            <Link to="/">
              <li>{t('How we work')}</li>
            </Link>
            <Link to="/">
              <li>{t('Our values')}</li>
            </Link>
          </ul>
        </div>
        <div className="footer-blocks__block">
          <h3>{t('Services')}</h3>
          <ul>
            <Link to="/">
              <li>{t('Creating web applications')}</li>
            </Link>
            <Link to="/">
              <li>{t('Creating SPA websites')}</li>
            </Link>
            <Link to="/">
              <li>{t('Creating portfolio pages')}</li>
            </Link>
          </ul>
        </div>
        <div className="footer-blocks__block">
          <h3>{t('Language')}</h3>
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
