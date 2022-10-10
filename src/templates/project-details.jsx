import { graphql } from 'gatsby';
import Layout from '@/components/Layout/layout';
import { Wrapper } from '../styles/ProjectDetails.styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const ProjectDetails = ({ data }) => {
  const { title, backgroundImage, mockupImage, desktopImages, mobileImages } =
    data.markdownRemark.frontmatter;
  const breakpoints = useBreakpoint();

  return (
    <ParallaxProvider>
      <Layout>
        <Wrapper>
          <div className="image-wrapper">
            {breakpoints.sm ? (
              <>
                <div className="image-content">
                  <h1>{title}</h1>
                </div>
                <GatsbyImage image={getImage(backgroundImage)} />
              </>
            ) : (
              <Parallax speed={-100}>
                <div className="image-content">
                  <h1>{title}</h1>
                </div>
                <GatsbyImage image={getImage(backgroundImage)} />
              </Parallax>
            )}
          </div>
          <div className="mockup-wrapper">
            <GatsbyImage image={getImage(mockupImage)} />
          </div>
          <div className="content-wrapper">
            <div className="desktop-images">
              {desktopImages.map((img) => (
                <GatsbyImage key="1" image={getImage(img)} alt="im" />
              ))}
            </div>
            <div className="mobile-images">
              {mobileImages.map((img) => (
                <GatsbyImage key="1" image={getImage(img)} alt="im" />
              ))}
            </div>
          </div>
        </Wrapper>
      </Layout>
    </ParallaxProvider>
  );
};

export const query = graphql`
  query ProjectDetails($slug: String, $language: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        backgroundImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        mockupImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        desktopImages {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        mobileImages {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
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

export default ProjectDetails;
