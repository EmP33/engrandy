import HeroSection from '@/components/HeroSection/HeroSection';
import Layout from '@/components/layout';
import Notification from '@/components/Notification/Notification';
import Packages from '@/components/Packages/Packages';
import Process from '@/components/Process/Process';
import Seo from '@/components/seo';
import Whywe from '@/components/Whywe/Whywe';

import { graphql } from 'gatsby';

const Home = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Whywe />
        <Process />
        <Packages />
        <Notification />
      </Layout>
    </>
  );
};

export const Head = () => {
  return <Seo title="Home" />;
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

export default Home;
