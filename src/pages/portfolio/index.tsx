import Layout from '@/components/Layout/layout';
import PortfolioProject from '@/components/PortfolioProject/PortfolioProject';
import { Wrapper } from '@/styles/Portfolio.styles';
import { graphql } from 'gatsby';
import Seo from '@/components/seo';
import PageHeading from '@/components/PageHeading/PageHeading';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const breakpoints = useBreakpoint();

  return (
    <Layout>
      <Wrapper>
        <Breadcrumb currentPage="Portfolio" link="/" previousPage="Home" />
        <PageHeading heading={t('Our projects')} subheading="Portfolio" />
        <div className="projects-grid" data-aos="slide-up">
          <PortfolioProject
            pageLink="bor-gaz"
            name="col-md"
            link="https://res.cloudinary.com/dtbemnmn4/image/upload/v1665219925/borgaz_ifdp1b.webp"
          />
          <PortfolioProject
            pageLink="benative"
            name="col-lg"
            link={
              breakpoints.sm
                ? 'https://res.cloudinary.com/dtbemnmn4/image/upload/v1665221171/Projekt_bez_tytu197130u_vi0kqm.webp'
                : 'https://res.cloudinary.com/dtbemnmn4/image/upload/v1665219925/benative_gzzggt.webp'
            }
          />
          <PortfolioProject
            pageLink="rockuhome"
            link="https://res.cloudinary.com/dtbemnmn4/image/upload/v1665219925/ruh_uybzbf.webp"
            name="col-sm"
          />
          <PortfolioProject
            pageLink="emp33"
            name="col-xs"
            link={
              breakpoints.sm
                ? 'https://res.cloudinary.com/dtbemnmn4/image/upload/v1665221171/EMP33_avbun1.webp'
                : 'https://res.cloudinary.com/dtbemnmn4/image/upload/v1665219925/EMP_sfszi6.webp'
            }
          />
          <PortfolioProject
            pageLink="hallowand"
            link={
              breakpoints.sm
                ? 'https://res.cloudinary.com/dtbemnmn4/image/upload/v1665221171/EMP33_1__fsn5pk.webp'
                : 'https://res.cloudinary.com/dtbemnmn4/image/upload/v1665219925/hallowand_vtadwf.webp'
            }
            name="col-lg"
          />
        </div>
      </Wrapper>
    </Layout>
  );
};

export const Head = () => {
  return <Seo title="Portfolio" />;
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

export default Portfolio;
