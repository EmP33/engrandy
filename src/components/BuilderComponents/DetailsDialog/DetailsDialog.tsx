import React from 'react';
import { Wrapper } from './DetailsDialog.styles';

import { graphql, useStaticQuery } from 'gatsby';

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
  console.log(configurationOption);

  return (
    <Wrapper onClick={hideShowDetails}>
      <div
        className="details"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="details__heading">
          <h2>{configurationOption.frontmatter.title}</h2>
          <IoMdClose onClick={hideShowDetails} />
        </div>
        <div
          className="details__content"
          dangerouslySetInnerHTML={{ __html: configurationOption.html }}
        ></div>
      </div>
    </Wrapper>
  );
};

export default DetailsDialog;
