
const { createFilePath } = require('gatsby-source-filesystem')


exports.createPages = async ({ graphql, actions }) => { 
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result= await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
  `)

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    createPage({
      path: `posts${node.fields.slug}`,
      component: require.resolve("./src/templates/post-template.js"),
      context: { slug: node.fields.slug},
    })
  });
  
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {

    const slug = createFilePath({ node ,getNode,path:'/posts'})

    createNodeField({ node, name: 'slug', value: slug })
  }
}
