/*
  Create individual project posts
  */

 exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
  
    const postTemplate = require.resolve("./src/schemas/project.js")
  
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
  
    const postsList = result.data.allPrismicBlogPost.edges
  
    // TODO: Cy: If you dont choose a category in blog post it breaks
  
    postsList.forEach(edge => {
      const url = `/blog/${edge.node.uid}`
      createPage({
        path: url,
        component: postTemplate,
        context: {
          uid: edge.node.uid,
        },
      })
    })
  }