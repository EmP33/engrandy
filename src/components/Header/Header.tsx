import { useState, useEffect } from 'react';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
// Components
import PrimaryButton from '../Utils/PrimaryButton';
import Drawer from '../Drawer/Drawer';
// Styles
import { Wrapper } from './Header.styles';
// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';

const Header = () => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  const { languages, originalPath } = useI18next();
  const { t } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);
  const [userScroll, setUserScroll] = useState(0);

  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setUserScroll(window.scrollY);
      });
    }
  }, []);

  return (
    <Wrapper isScrolled={userScroll >= 300}>
      <div className="notification-bar">
        <div className="notification-bar__container">
          {t('The website cost starts from $25')}{' '}
          <Link to="">{t('Check the offer')}</Link>
        </div>
      </div>
      <div className="appbar">
        <div className="appbar__container">
          <Link to="/">Engrandy</Link>
          <nav>
            <ul>
              <li>
                <Link to="#">
                  {t('About us')} <BiChevronDown />
                </Link>
                <div className="dropdown">
                  <div className="dropdown__content">
                    <Link to="">
                      <span>{t('About us')}</span>
                    </Link>
                    <Link to="">
                      <span>{t('How we work')}</span>
                    </Link>
                    <Link to="">
                      <span>{t('Our values')}</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="#">
                  {t('Services')} <BiChevronDown />
                </Link>
                <div className="dropdown">
                  <div className="dropdown__content">
                    <Link to="">
                      <span>{t('Creating web applications')}</span>
                      <span>
                        {t('Web applications based on React or Gatsby')}
                      </span>
                    </Link>
                    <Link to="">
                      <span>{t('Creating SPA websites')}</span>
                      <span>
                        {t(
                          'Pages based on the latest technologies that guarantee speed and good positioning',
                        )}
                      </span>
                    </Link>
                    <Link to="">
                      <span>{t('Creating portfolio pages')}</span>
                      <span>
                        {t(
                          'We will create a professional website perfect for you',
                        )}
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">{t('Builder')}</Link>
              </li>
              <li>
                <Link to="/">{t('Contact')}</Link>
              </li>
              <li>
                <Link to="#">
                  {url.includes('pl') ? 'PL' : 'EN'} <BiChevronDown />
                </Link>{' '}
                <div className="dropdown">
                  <div className="dropdown__content">
                    {languages.map((lng) => (
                      <Link key={lng} to={originalPath} language={lng}>
                        <span>{lng.toUpperCase()}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <PrimaryButton text={t('Check the price')} />
          <GiHamburgerMenu onClick={toggleDrawer} />
        </div>
      </div>
      <Drawer toggleDrawer={toggleDrawer} showDrawer={showDrawer} />
    </Wrapper>
  );
};

export default Header;
