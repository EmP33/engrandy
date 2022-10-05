import HeroSection from '@/components/HeroSection/HeroSection';
import Layout from '@/components/layout';
import Seo from '@/components/seo';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
};

export const Head = () => {
  return <Seo title="Home" />;
};

export default Home;
