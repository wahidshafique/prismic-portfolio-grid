/*
  Create individual project posts
  */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve("./src/templates/project.js");

  const result = await graphql(`
    {
      allPrismicProject(sort: { fields: last_publication_date, order: DESC }) {
        edges {
          node {
            id
            uid
            tags
          }
        }
      }
    }
  `);

  const postsList = result.data.allPrismicProject.edges;

  postsList.forEach((edge) => {
    const url = `/${edge.node.tags[0] || process.env.GATSBY_PROJECT_BASE_URL}/${
      edge.node.uid
    }`;
    console.log(url);
    createPage({
      path: url,
      component: projectTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
