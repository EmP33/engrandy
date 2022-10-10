import { Link } from 'gatsby-plugin-react-i18next';
import { Wrapper } from './Navigation.styles';
import GlobalStyle from '@/styles/Global.styles';
// @ts-ignore
import ScrollspyNav from 'react-scrollspy-nav';
// Icons
import { BiChevronLeft } from 'react-icons/bi';

const Navigation = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Link to="/" className="home-link">
        <BiChevronLeft />
        Home
      </Link>
      <ScrollspyNav
        scrollTargetIds={[
          'order-packages',
          'animations',
          'additional-function',
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
          <a href="#additional-function">
            <li>Additional functions</li>
          </a>
        </ul>
      </ScrollspyNav>
      <span>Engrandy</span>
    </Wrapper>
  );
};

export default Navigation;
