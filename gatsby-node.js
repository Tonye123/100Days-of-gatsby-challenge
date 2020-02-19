//const path = require(`path`)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  // else if (node.internal.type === "Mdx") {
  //     const value = createFilePath({ node, getNode })
  //     createNodeField({
  //       // Name of the field you are adding
  //       name: "slug",
  //       // Individual MDX node
  //       node,
  //       // Generated value based on filepath with "blog" prefix. you
  //       // don't need a separating "/" before the value because
  //       // createFilePath returns a path with the leading "/".
  //       value: `/blog${value}`,
  //     })
  //   }

  

}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}


// exports.createPages = async ({ graphql, actions, reporter }) => {
//   // Destructure the createPage function from the actions object
//   const { createPage } = actions

//   const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//   }

//   // Create blog post pages.
//   const posts = result.data.allMdx.edges

//   // you'll call `createPage` for each result
//   posts.forEach(({ node }, index) => {
//     createPage({
//       // This is the slug you created before
//       // (or `node.frontmatter.slug`)
//       path: node.fields.slug,
//       // This component will wrap our MDX content
//       component: path.resolve(`./src/components/posts-page-layout.js`),
//       // You can use the values in this context in
//       // our page layout component
//       context: { id: node.id },
//     })
//   })
// }