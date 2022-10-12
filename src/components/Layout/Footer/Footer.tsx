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
            <li>
              <Link to="/about-us/">{t('About us')} </Link>
            </li>

            <li>
              <Link to="/our-values/">{t('Our values')} </Link>
            </li>

            <li>
              <Link to="/faq/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="footer-blocks__block">
          <h3>{t('Services')}</h3>
          <ul>
            <li>
              <Link to="/">{t('Creating web applications')}</Link>
            </li>

            <li>
              <Link to="/">{t('Creating SPA websites')} </Link>
            </li>

            <li>
              <Link to="/">{t('Creating portfolio pages')}</Link>
            </li>
          </ul>
        </div>
        <div className="footer-blocks__block">
          <h3>{t('Language')}</h3>
          <ul>
            {languages.map((lng) => (
              <li key={lng}>
                <Link to={originalPath} language={lng}>
                  {lng.toUpperCase()}
                </Link>
              </li>
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
