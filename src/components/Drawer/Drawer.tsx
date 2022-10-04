import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Backdrop } from './Drawer.styles';
import { Link } from 'gatsby';
// Icons
import { AiOutlineClose } from 'react-icons/ai';

interface IProps {
  toggleDrawer: () => void;
  showDrawer: boolean;
}

const Drawer: React.FC<IProps> = ({ toggleDrawer, showDrawer }) => {
  const el =
    typeof document !== 'undefined' ? document.querySelector('#portal') : null;
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Backdrop onClick={toggleDrawer} showDrawer={showDrawer} />
          <Wrapper showDrawer={showDrawer}>
            <div className="drawer-heading">
              <Link to="/">Engrandy</Link>
              <AiOutlineClose onClick={toggleDrawer} />
            </div>
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
          </Wrapper>
        </>,
        el as Element,
      )}
    </>
  );
};

export default Drawer;
