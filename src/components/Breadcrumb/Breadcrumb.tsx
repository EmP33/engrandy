import { BiChevronsRight } from 'react-icons/bi';
import { Wrapper } from './Breadcrumb.styles';
import { Link } from 'gatsby-plugin-react-i18next';

const Breadcrumb = () => {
  return (
    <Wrapper>
      <Link to="/">Strona główna</Link> <BiChevronsRight /> O nas
    </Wrapper>
  );
};

export default Breadcrumb;
