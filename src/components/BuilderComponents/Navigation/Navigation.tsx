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
          <a href="#order-packages">
            <li>Packages</li>
          </a>
          <a href="#animations">
            <li>Animations</li>
          </a>
          <a href="#contact">
            <li>Contact Form</li>
          </a>
          <a href="#other-function">
            <li>Additional functions</li>
          </a>
          <a href="#summary">
            <li>Summary</li>
          </a>
        </ul>
      </ScrollspyNav>
      <span>Engrandy</span>
    </Wrapper>
  );
};

export default Navigation;
