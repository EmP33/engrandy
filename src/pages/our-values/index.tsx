import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Layout from '@/components/layout';
import MoreAboutus from '@/components/MoreAboutus/MoreAboutus';
import { Wrapper } from '@/styles/BasicWrapper.styles';

const OurValues = () => {
  return (
    <Layout>
      <Wrapper>
        <Breadcrumb currentPage="Our values" previousPage="Home" link="/" />
        <MoreAboutus />
      </Wrapper>
    </Layout>
  );
};

export default OurValues;
