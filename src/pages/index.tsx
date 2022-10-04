import Layout from '@/components/layout';
import Seo from '@/components/seo';

const Home = () => {
  return (
    <Layout>
      <h1>HELLO</h1>
    </Layout>
  );
};

export const Head = () => {
  return <Seo title="Home" />;
};

export default Home;
