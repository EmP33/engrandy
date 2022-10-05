import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Backdrop } from './Drawer.styles';
import { Link } from 'gatsby';
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
                        O nas <FiChevronDown />
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
                      <Link to="" onClick={() => handleShowDetails(2)}>
                        Usługi <FiChevronDown />
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
                            <span>Tworzenie aplikacji webowych</span>
                            <span>
                              Aplikacje webowe oparte na React lub Gatsby
                            </span>
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
                      <Link to="">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="">Kreator</Link>
                    </li>
                    <li>
                      <Link to="">Kontakt</Link>
                    </li>
                    <li>
                      <Link to="" onClick={() => handleShowDetails(3)}>
                        PL <FiChevronDown />
                      </Link>
                      <div
                        className={
                          showDetails.number === 3 && showDetails.show
                            ? `dropdown-active`
                            : `dropdown`
                        }
                      >
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
              </Wrapper>
            </>,
            portalRoot,
          )
        : null}
    </>
  );
};

export default Drawer;
