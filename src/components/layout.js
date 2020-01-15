import React from "react"
import { css, Global } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Footer from './footer'

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
          
        </h3>
        
      </Link>
      <Global 
         styles= {css`
           body {
              background: papayawhip;
           }
         `}
      
      />
     
      
      {children}
      <Footer />
    </div>
    
  )
}