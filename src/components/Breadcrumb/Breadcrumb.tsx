import React from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import { Wrapper } from './Breadcrumb.styles';
import { Link } from 'gatsby-plugin-react-i18next';

interface IProps {
  currentPage: string;
  previousPage: string;
  link: string;
}

const Breadcrumb: React.FC<IProps> = ({ currentPage, previousPage, link }) => {
  return (
    <Wrapper>
      <Link to={link}>{previousPage}</Link> <BiChevronsRight /> {currentPage}
    </Wrapper>
  );
};

export default Breadcrumb;
