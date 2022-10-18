import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

interface Props {
  description?: string;
  title?: string | undefined;
  children?: JSX.Element;
}

const Seo: React.FC<Props> = ({ description, title, children }) => {
  const { t } = useTranslation();
  const { site } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            description
            author
            title
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <title>{!title ? t(defaultTitle) : t(title)}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      {children}
    </>
  );
};

Seo.defaultProps = {
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Seo;
