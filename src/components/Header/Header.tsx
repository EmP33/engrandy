import React, { useState } from 'react';
import { Link } from 'gatsby';
// Components
import PrimaryButton from '../Utils/PrimaryButton';
import Drawer from '../Drawer/Drawer';
// Styles
import { Wrapper } from './Header.styles';
// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiChevronDown } from 'react-icons/bi';

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <Wrapper>
      <div className="notification-bar">
        <div className="notification-bar__container">
          Strona już od 120 złotych! <Link to="">Sprawdź ofertę</Link>
        </div>
      </div>
      <div className="appbar">
        <div className="appbar__container">
          <Link to="/">Engrandy</Link>
          <nav>
            <ul>
              <li>
                <Link to="#">
                  O nas <BiChevronDown />
                </Link>
                <div className="dropdown">
                  <div className="dropdown__content">
                    <Link to="">
                      <span>O nas</span>
                    </Link>
                    <Link to="">
                      <span>Jak pracujemy</span>
                    </Link>
                    <Link to="">
                      <span>Nasze wartości</span>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="#">
                  Usługi <BiChevronDown />
                </Link>
                <div className="dropdown">
                  <div className="dropdown__content">
                    <Link to="">
                      <span>Tworzenie aplikacji webowych</span>
                      <span>Aplikacje webowe oparte na React lub Gatsby</span>
                    </Link>
                    <Link to="">
                      <span>Tworzenie stron typu SPA</span>
                      <span>
                        Strony oparte na najnowszych technologiach, które
                        zagwarantują szybkość i dobre pozycjonowanie
                      </span>
                    </Link>
                    <Link to="">
                      <span>Tworzenie stron portfolio</span>
                      <span>
                        Stworzymy profesjonalną stronę idealną pod Ciebie
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">Kreator</Link>
              </li>
              <li>
                <Link to="/">Kontakt</Link>
              </li>
              <li>
                <Link to="#">
                  PL <BiChevronDown />
                </Link>{' '}
                <div className="dropdown">
                  <div className="dropdown__content">
                    <Link to="">
                      <span>PL</span>
                    </Link>
                    <Link to="">
                      <span>ENG</span>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <PrimaryButton text="Sprawdź cenę" />
          <GiHamburgerMenu onClick={toggleDrawer} />
        </div>
      </div>
      <Drawer toggleDrawer={toggleDrawer} showDrawer={showDrawer} />
    </Wrapper>
  );
};

export default Header;
