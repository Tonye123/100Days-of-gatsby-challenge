import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

export default ({ data }) => {
  console.log(data)

return (

  <Layout>
    <h1
    css={css`
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #ccc;
      
    `}
    >100Days of Gatsby</h1>
    <h4>{data.allMarkdownRemark.totalCount} 
Post{data.allMarkdownRemark.totalCount > 1 ? 's' : ''}</h4>
  {data.allMarkdownRemark.edges.map(({node})=>(
    <div key={node.id}>
      <Link
      to={node.fields.slug}
      css={css`
        text-decoration: none;
        color: inherit;
      `
  }>
      <h3
      css={css`
        margin-bottom: ${rhythm(1 / 4)};
      `}>
        {node.frontmatter.title}
        <span
          css={css`
            color: #656464;
            font-size: 18px;
            `}>
          -{node.frontmatter.date}
          
        </span>
        

      </h3>
      
    <p>{node.excerpt}</p>
    </Link>
  
   
    </div>

  ))}
    
  </Layout>
)

}

export const query = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          date(formatString: "DD MMMM, YYYY")
          title
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
`
