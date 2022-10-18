import type { GatsbyConfig } from 'gatsby';

const myCustomQueries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 800px)',
  md: '(max-width: 1024px)',
  l: '(max-width: 1536px)',
  portrait: '(orientation: portrait)',
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Professional websites - Create your own website`,
    description: `We will build a perfect website for you. Use the order builder to accurately personalize and price your order. Professional support. Responsiveness of the website and the best positioning.`,
    author: `Emp33`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `configurationDetails`,
        path: `${__dirname}/src/configurationDetails/`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `pl`],
        defaultLanguage: `es`,
        fallbackLng: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `http://localhost:8000/`,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        // trailingSlash: 'always',
        // you can pass any i18next options
        i18nextOptions: {
          fallbackLng: `en`,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['en'],
          },
          {
            matchPath: '/preview',
            languages: ['en'],
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: myCustomQueries,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-use-query-params`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/E.png',
      },
    },
  ],
  jsxRuntime: `automatic`,
};

export default config;
