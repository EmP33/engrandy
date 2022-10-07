import React from 'react';
import { Wrapper } from './PageHeading.styles';
import { useTranslation } from 'gatsby-plugin-react-i18next';

interface IProps {
  subheading: string;
  heading: String;
}

const PageHeading: React.FC<IProps> = ({ subheading, heading }) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <span data-aos="fade-up">{t(subheading)}</span>
      <h2 data-aos="fade-up">{t(heading)}</h2>
    </Wrapper>
  );
};

export default PageHeading;
