import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import SEO from "../components/seo"

export default ( {data}) => {
  
return (
  <Layout>
    <SEO title = "About" />
    <h1>About {data.site.siteMetadata.author}.</h1>
    <Img 
      fixed = {data.file.childImageSharp.fixed}
      alt="Tonyes' Selfie"
    />
    <p>
      Hi! My name is Tonye. I am a Front-End Developer! 
    </p>
  </Layout>
)

}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    file(relativePath: {eq: "selfie.jpg"}) {
      childImageSharp {
        fixed(height: 320, width: 240) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`