import { Link } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './Navigation.styles';

// @ts-ignore
import ScrollspyNav from 'react-scrollspy-nav';
// Icons
import { BiChevronLeft } from 'react-icons/bi';

const Navigation = () => {
  return (
    <Wrapper data-aos="fade-down">
      <Link to="/" className="home-link">
        <BiChevronLeft />
        Home
      </Link>
      <ScrollspyNav
        scrollTargetIds={[
          'order-packages',
          'animations',
          'contact',
          'other-function',
          'summary',
        ]}
        offset={100}
        activeNavClass="is-active"
        scrollDuration="1000"
        headerBackground="true"
      >
        <ul>
          <li>
            <a href="#order-packages">Packages</a>
          </li>
          <li>
            <a href="#animations">Animations </a>
          </li>
          <li>
            <a href="#contact">Contact Form </a>
          </li>
          <li>
            <a href="#other-function">Additional functions </a>
          </li>
          <li>
            <a href="#summary">Summary </a>
          </li>
        </ul>
      </ScrollspyNav>
      <span>Engrandy</span>
    </Wrapper>
  );
};

export default Navigation;
