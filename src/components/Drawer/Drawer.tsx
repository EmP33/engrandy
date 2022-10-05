import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Backdrop } from './Drawer.styles';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
// Icons
import { IoCloseSharp } from 'react-icons/io5';
import { FiChevronDown } from 'react-icons/fi';

interface IProps {
  toggleDrawer: () => void;
  showDrawer: boolean;
}

const portalRoot =
  typeof document !== `undefined` ? document.getElementById('portal') : null;

const Drawer: React.FC<IProps> = ({ toggleDrawer, showDrawer }) => {
  const url = typeof window !== 'undefined' ? window.location.pathname : '';
  const { t } = useTranslation();
  const { languages, originalPath } = useI18next();
  const [showDetails, setShowDetails] = useState<{
    show: boolean;
    number: number | null;
  }>({ show: false, number: null });

  const handleShowDetails = (numb: number) => {
    if (numb !== showDetails.number) {
      return setShowDetails(() => ({ show: true, number: numb }));
    }
    setShowDetails((prev) => ({ show: !prev.show, number: numb }));
  };
  return (
    <>
      {portalRoot
        ? ReactDOM.createPortal(
            <>
              <Backdrop onClick={toggleDrawer} showDrawer={showDrawer} />
              <Wrapper showDrawer={showDrawer}>
                <div className="drawer-heading">
                  <Link to="/">Engrandy</Link>
                  <IoCloseSharp onClick={toggleDrawer} />
                </div>
                <nav>
                  <ul>
                    <li>
                      <Link to="" onClick={() => handleShowDetails(1)}>
                        {t('About us')} <FiChevronDown />
                      </Link>
                      <div
                        className={
                          showDetails.number === 1 && showDetails.show
                            ? `dropdown-active`
                            : `dropdown`
                        }
                      >
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
                      <Link to="" onClick={() => handleShowDetails(2)}>
                        {t('Services')} <FiChevronDown />
                      </Link>
                      <div
                        className={
                          showDetails.number === 2 && showDetails.show
                            ? `dropdown-active`
                            : `dropdown`
                        }
                      >
                        <div className="dropdown__content">
                          <Link to="">
                            <span>{t('Creating web applications')}</span>
                            <span>
                              {t('Web applications based on React or Gatsby')}
                            </span>
                          </Link>
                          <Link to="">
                            <span> {t('Creating SPA websites')}</span>
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
                      <Link to="">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="">{t('Builder')}</Link>
                    </li>
                    <li>
                      <Link to="">{t('Contact')}</Link>
                    </li>
                    <li>
                      <Link to="" onClick={() => handleShowDetails(3)}>
                        {url.includes('pl') ? 'PL' : 'EN'} <FiChevronDown />
                      </Link>
                      <div
                        className={
                          showDetails.number === 3 && showDetails.show
                            ? `dropdown-active`
                            : `dropdown`
                        }
                      >
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
              </Wrapper>
            </>,
            portalRoot,
          )
        : null}
    </>
  );
};

export default Drawer;
