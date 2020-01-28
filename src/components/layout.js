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
        height; 100vh;
        padding-bottom: 0px;
      `}
    >
      <header>
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
      <ul style={{float: "right"}}>
          <li style={{ display: `inline-block`, marginRight: `1rem` }}>
            <Link to={`/about/`}>About</Link>
        </li>
      </ul>

      </header>
      
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