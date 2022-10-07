import AboutImage from '@/assets/AboutImage';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Layout from '@/components/layout';
import MoreAboutus from '@/components/MoreAboutus/MoreAboutus';
import Seo from '@/components/seo';
import { Wrapper } from '@/styles/Aboutus.styles';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Aboutus = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Wrapper>
        <div className="hero-section">
          <div className="content-wrapper">
            <Breadcrumb
              currentPage={t('About us')}
              previousPage={t('Home')}
              link="/"
            />
            <div className="content-box">
              <span>{t('About us')}</span>
              <h1>
                {t(
                  'We will create the perfect business card for you on the Internet',
                )}
              </h1>
              <p>
                {t(
                  'You will receive from us the perfect website that will represent you or your business in a professional style',
                )}
              </p>
            </div>
            <div className="img-wrapper">
              <AboutImage />
            </div>
          </div>
        </div>
        <MoreAboutus />
      </Wrapper>
    </Layout>
  );
};

export const Head = () => <Seo title="About us" />;

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

export default Aboutus;
