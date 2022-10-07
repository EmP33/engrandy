import { useEffect } from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './Footer.styles';

import { FaFacebookF } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { t } = useTranslation();
  const { languages, originalPath } = useI18next();
  return (
    <Wrapper>
      <span>Engrandy</span>
      <div className="footer-blocks">
        <div className="footer-blocks__block">
          <h3>{t('About us')}</h3>
          <ul>
            <Link to="/about-us/">
              <li>{t('About us')}</li>
            </Link>
            <Link to="/our-values/">
              <li>{t('Our values')}</li>
            </Link>
            <Link to="/faq/">
              <li>FAQ</li>
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
            {languages.map((lng) => (
              <Link key={lng} to={originalPath} language={lng}>
                <li>{lng.toUpperCase()}</li>
              </Link>
            ))}
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
