exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectTemplate = require.resolve("./src/templates/project.js");
  const projectGroupTemplate = require.resolve(
    "./src/templates/projectGroup.js"
  );

  const projectResult = await graphql(`
    {
      allPrismicProject(sort: { fields: last_publication_date, order: DESC }) {
        distinct(field: tags)
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

  const postsList = projectResult.data.allPrismicProject.edges;
  const distinctTags = projectResult.data.allPrismicProject.distinct;

  // create grouped project pages (organized by tag)
  distinctTags.forEach((tag) => {
    createPage({
      path: tag,
      component: projectGroupTemplate,
      context: {
        tag,
      },
    });
  });

  // create all individual project pages
  postsList.forEach((edge) => {
    const url = `/${edge.node.tags[0] || process.env.GATSBY_PROJECT_BASE_URL}/${
      edge.node.uid
    }`;
    createPage({
      path: url,
      component: projectTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
