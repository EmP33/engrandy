import HeroSection from '@/components/HomePageComponents/HeroSection/HeroSection';
import Layout from '@/components/Layout/layout';
import Notification from '@/components/HomePageComponents/Notification/Notification';
import Packages from '@/components/HomePageComponents/Packages/Packages';
import Process from '@/components/HomePageComponents/Process/Process';
import Seo from '@/components/seo';
import Whywe from '@/components/HomePageComponents/Whywe/Whywe';

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
