import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Layout from '@/components/layout';
import MoreAboutus from '@/components/MoreAboutus/MoreAboutus';
import Seo from '@/components/seo';
import { Wrapper } from '@/styles/BasicWrapper.styles';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const OurValues = () => {
  const { t } = useTranslation();
  return (
    <Layout>
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
  const { t } = useTranslation();
  return <Seo title={t('Our values')} />;
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
