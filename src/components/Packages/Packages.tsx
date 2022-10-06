import PrimaryButton from '../Utils/PrimaryButton';
import { Link } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './Packages.styles';
import { BsCheck } from 'react-icons/bs';

const Packages = () => {
  return (
    <Wrapper>
      <h2>Wybierz jeden z podstawowych pakietów dla siebie</h2>
      <div className="packages">
        <div className="packages__package">
          <h3>Strona Internetowa</h3>
          <ul>
            <li>
              <BsCheck />
              <span>Profesjonalna strona internetowa</span>
            </li>
            <li>
              <BsCheck />
              <span>Dostosowanie do wersji na telefon (RWD)</span>
            </li>
            <li>
              <BsCheck />
              <span>Kopie zapasową</span>
            </li>
            <li>
              <BsCheck />
              <span>Pomoc techniczna na 1 rok</span>
            </li>
            <li>
              <BsCheck />
              <span>Zdjęcia i ikonki z licencją</span>
            </li>
            <li>
              <BsCheck />
              <span>Konfiguracja formularza kontaktowego</span>
            </li>
            <li>
              <BsCheck />
              <span>Polityka prywatności</span>
            </li>
            <li>
              <BsCheck />
              <span>1 strona</span>
            </li>
          </ul>
          <div className="package__action">
            <h4>450 netto</h4>
            <PrimaryButton text="Zamów teraz" />
          </div>
        </div>
        <div className="packages__package">
          <h3>Strona Internetowa</h3>
          <ul>
            <li>
              <BsCheck />
              <span>Profesjonalna strona internetowa</span>
            </li>
            <li>
              <BsCheck />
              <span>Dostosowanie do wersji na telefon (RWD)</span>
            </li>
            <li>
              <BsCheck />
              <span>Kopie zapasową</span>
            </li>
            <li>
              <BsCheck />
              <span>Pomoc techniczna na 1 rok</span>
            </li>
            <li>
              <BsCheck />
              <span>Zdjęcia i ikonki z licencją</span>
            </li>
            <li>
              <BsCheck />
              <span>Konfiguracja formularza kontaktowego</span>
            </li>
            <li>
              <BsCheck />
              <span>Polityka prywatności</span>
            </li>
            <li>
              <BsCheck />
              <span>3 strony</span>
            </li>
          </ul>
          <div className="package__action">
            <h4>750 netto</h4>
            <PrimaryButton text="Zamów teraz" />
          </div>
        </div>
        <div className="packages__package">
          <h3>Strona Internetowa</h3>
          <ul>
            <li>
              <BsCheck />
              <span>Profesjonalna strona internetowa</span>
            </li>
            <li>
              <BsCheck />
              <span>Dostosowanie do wersji na telefon (RWD)</span>
            </li>
            <li>
              <BsCheck />
              <span>Kopie zapasową</span>
            </li>
            <li>
              <BsCheck />
              <span>Pomoc techniczna na 1 rok</span>
            </li>
            <li>
              <BsCheck />
              <span>Zdjęcia i ikonki z licencją</span>
            </li>
            <li>
              <BsCheck />
              <span>Konfiguracja formularza kontaktowego</span>
            </li>
            <li>
              <BsCheck />
              <span>Polityka prywatności</span>
            </li>
            <li>
              <BsCheck />
              <span>5 stron</span>
            </li>
          </ul>
          <div className="package__action">
            <h4>1150 netto</h4>
            <PrimaryButton text="Zamów teraz" />
          </div>
        </div>
      </div>
      <span>
        Po wybraniu pakietu zostaniesz przekierowany do{' '}
        <Link to="/builder">kreatora zamówienia</Link> .
      </span>
    </Wrapper>
  );
};

export default Packages;
