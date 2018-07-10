const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const pageTemplate = path.resolve(`src/components/Page.js`);

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            frontmatter {
              path
              category
            }
          }
        }
      }
      footerJson {
        copyright
        madeIn
        linkGroups {
          title
          links {
            label
            to
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {
          footer: result.data.footerJson,
          category: node.frontmatter.category,
        }, // additional data can be passed via context
      });
    });
  });
};
