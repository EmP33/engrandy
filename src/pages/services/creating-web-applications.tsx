import React from 'react';
import Layout from '@/components/Layout/layout';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Seo from '@/components/seo';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';

import { Wrapper } from '@/styles/CreatingWebApplications.styles';
import PageHeading from '@/components/PageHeading/PageHeading';

import { AiOutlineMobile } from 'react-icons/ai';
import { IoExtensionPuzzleOutline } from 'react-icons/io5';
import { FaGoogle } from 'react-icons/fa';
import CreatingWebApps from '@/assets/CreatingWebApps';

const CreatingWebApplications: React.FC<{ location: any }> = ({ location }) => {
  const { t } = useTranslation();
  return (
    <Layout location={location}>
      <Wrapper>
        <div className="content-wrapper">
          <Breadcrumb
            currentPage={t('Services')}
            previousPage={t('Home')}
            link="/"
          />
          <div className="content-wrapper__heading" data-aos="fade-up">
            <PageHeading
              subheading="Services"
              heading="Creating Web Applications"
            />
            <p>
              {t(
                'We build our websites using new technologies to ensure speed and efficiency in the positioning of our websites. We use well-known languages, frameworks and libraries such as JavaScript, React or Gatsby.',
              )}
            </p>
            <CreatingWebApps />
          </div>
          <div className="content-wrapper__blocks">
            <div className="heading" data-aos="fade-down">
              <h3>{t('Why is it worth choosing our service?')}</h3>
              <p>
                {t(
                  'We use the React.js library to create our applications and websites. It is a JavaScript library used in web development for interactive elements on a site. One of the biggest advantages of using the React.js framework in a project is the reduction of time and costs, thanks to which we can deliver your product in a faster and cheaper way.',
                )}
              </p>
            </div>

            <div className="blocks" data-aos="fade-down">
              <div className="block">
                <FaGoogle />
                <h4>{t('SEO friendly')}</h4>
                <p>
                  {t(
                    'Pages created with React technology are much faster than others. Higher loading speed does not discourage visitors, and search engines position our website better. Web applications created with React.js are easy to read and index by Google bots.',
                  )}
                </p>
              </div>
              <div className="block">
                <IoExtensionPuzzleOutline />
                <h4>{t('Easy to use')}</h4>
                <p>
                  {t(
                    'React is easy to use and the code you create is clear and readable. With a component-based approach and other useful features, React.js helps you build professional web applications and supports them.',
                  )}
                </p>
              </div>
              <div className="block">
                <AiOutlineMobile />
                <h4>{t('Responsive')}</h4>
                <p>
                  {t(
                    'React.js allows you to create fully responsive, fast and useful websites tailored to the needs of users. Your web application will be responsive and will quickly adapt to any screen size.',
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
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

export const Head = () => <Seo />;

export default CreatingWebApplications;
