/*
  Create individual project posts
  */

 exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const projectTemplate = require.resolve("./src/templates/project.js")
  
    const result = await graphql(`
      {
        allPrismicProject(sort: { fields: last_publication_date, order: DESC }) {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `)
  
    const postsList = result.data.allPrismicProject.edges
  
    // TODO: Cy: If you dont choose a category in post it breaks
  
    postsList.forEach(edge => {
      const url = `/project/${edge.node.uid}`
      createPage({
        path: url,
        component: projectTemplate,
        context: {
          uid: edge.node.uid,
        },
      })
    })
  }