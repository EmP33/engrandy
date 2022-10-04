import React, { useState } from 'react';
import { Link } from 'gatsby';
// Components
import PrimaryButton from '../Utils/PrimaryButton';
// Styles
import { Wrapper } from './Header.styles';
// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import Drawer from '../Drawer/Drawer';

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
                <Link to="">O nas</Link>
              </li>
              <li>
                <Link to="">Usługi</Link>
              </li>
              <li>
                <Link to="">Portfolio</Link>
              </li>
              <li>
                <Link to="">Kontakt</Link>
              </li>
              <li>
                <Link to="">PL</Link>
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
