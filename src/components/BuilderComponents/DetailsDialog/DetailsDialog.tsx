import React from 'react';
import { Wrapper } from './DetailsDialog.styles';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { IoMdClose } from 'react-icons/io';

interface IProps {
  hideShowDetails: () => void;
  detailsSlug: string | null;
}

const DetailsDialog: React.FC<IProps> = ({ hideShowDetails, detailsSlug }) => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query detailsQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              preview
              previewImage {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, width: 800)
                }
              }
            }
            html
          }
        }
      }
    }
  `);
  const { node: configurationOption } = allMarkdownRemark.edges.find(
    (edge: any) => edge.node.frontmatter.slug === detailsSlug,
  );

  return (
    <Wrapper onClick={hideShowDetails}>
      <div
        className="details"
        data-aos="fade-down"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>
          {configurationOption.frontmatter.preview ? (
            <video
              src={configurationOption.frontmatter.preview}
              autoPlay
              muted
              loop
              width="100%"
            />
          ) : configurationOption.frontmatter.previewImage ? (
            <GatsbyImage
              image={getImage(
                configurationOption.frontmatter.previewImage.childImageSharp,
              )}
              alt="basic alt"
            />
          ) : (
            ''
          )}
        </div>
        <div>
          <div className="details__heading">
            <h2>{configurationOption.frontmatter.title}</h2>
            <IoMdClose onClick={hideShowDetails} />
          </div>
          <div
            className="details__content"
            dangerouslySetInnerHTML={{ __html: configurationOption.html }}
          ></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailsDialog;
