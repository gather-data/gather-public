module.exports = {
  siteMetadata: {
    siteUrl: `https://gatherdata.co`,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-75187719-2',
        // Puts tracking script in the head instead of the body
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-hubspot',
      options: {
        trackingCode: '4070737',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/assets/images/favicon-big.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: '100',
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/settings/footer`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/settings/navbar`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/pricing`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/integrations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/help`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/docs`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        // Type prefix of entities from server
        typePrefix: 'Gather',
        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `Services`,

        // The url, this should be the endpoint you are attempting to pull data from
        url: `https://api.gatherdata.co/services`,

        method: 'get',

        headers: {
          'Content-Type': 'application/json',
        },

        // Nested level of entities in repsonse object, example: `data.posts`
        entityLevel: `services`,

        // Simple authentication, if optional, set it null
        auth: null,

        // Optional payload key name if your api returns your payload in a different key
        // Default will use the full response from the http request of the url
        // payloadKey: `body`,
      },
    },
  ],
};
