import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import Forms from '../components/Forms'





export default ( {data}) => {
  
return (
  <Layout>
    <SEO title = "About" />
    <h1 css={css`
       text-align: center;

      `} 
    >About {data.site.siteMetadata.author}.</h1>
    <Img
      css={css`
        border: 5px solid white;
        border-radius: 2px;
       

      `} 
      fixed = {data.file.childImageSharp.fixed}
      alt="Tonyes' Selfie"
    />
    <p>
      Hi! My name is Tonye. I am a Front-End Developer! I love designing clean and responsive
      websites and web applications. 
    </p>

    <Forms />
  
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