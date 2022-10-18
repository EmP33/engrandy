import React from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Layout from '@/components/Layout/layout';
import MoreAboutus from '@/components/MoreAboutus/MoreAboutus';
import Seo from '@/components/seo';
import { Wrapper } from '@/styles/BasicWrapper.styles';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const OurValues: React.FC<{ location: any }> = ({ location }) => {
  const { t } = useTranslation();
  return (
    <Layout location={location}>
      <Wrapper>
        <Breadcrumb
          currentPage={t('Our values')}
          previousPage={t('Home')}
          link="/"
        />
        <MoreAboutus />
      </Wrapper>
    </Layout>
  );
};

export const Head = () => {
  return <Seo />;
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default OurValues;
