import React from 'react';
import { Wrapper } from './PortfolioProject.styles';

interface IProps {
  link: string;
  name?: string;
}

const PortfolioProject: React.FC<IProps> = ({ name, link }) => {
  return (
    <Wrapper
      link="https://res.cloudinary.com/dtbemnmn4/image/upload/v1665219497/ruh_pbju8r.png"
      className={name}
    >
      <img src={link} alt="portfolio project" />
    </Wrapper>
  );
};

export default PortfolioProject;
