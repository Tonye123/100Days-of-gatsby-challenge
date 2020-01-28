import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import SEO from "../components/seo"
import { css } from "@emotion/core"
import { Formik, Field, Form, ErrorMessage  } from 'formik'
import * as Yup from 'yup'
import styled from '@emotion/styled'


const StyledDiv = styled.div`
  
  line-height: 1.2;


  label {
    display: flex;
    margin-bottom: 5px;
    font-weight: bold;
    margin-top: 16px;
  }

  input[type="email"], input[type="text"], input[type="number"], textarea, select {
    width: 400px;
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    border: 2px solid #edf2f7;
    background-color: #f7fafc;
    color: #2d3748;
    border-radius: 10px;
}

  button {
    display: flex;
    padding: 0.5rem 1.25rem;
    font-size: 1rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 1rem;
  }


  @media only screen and (max-width : 320px) {
    input[type="email"], input[type="text"], input[type="number"], textarea, select {
          width: 80vw;
      }
    }


`




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

    <h2>Get in touch! </h2>
    <Formik
      initialValues={{firstName: "", email:"", message:""}}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        message: Yup.string()
          .max(150, 'Must be 150 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        setSubmitting(true)
        fetch('https://api.formik.com/submit/gatsbysitechallenge/contact', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        setSubmitting(false)
        resetForm();
      }}>
        {({isSubmitting }) => (
          
          <Form>
          <StyledDiv>
        <label  htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" /> 
        <label  htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <label htmlFor="message"> Reason for getting in touch</label>
        <Field name="message" as="textarea"  className="form-input"/>
        <ErrorMessage name="message" /> 
        <button type="submit" disabled={isSubmitting}>Submit</button>

        </StyledDiv>
          
        </Form>
        )}
        

    </Formik>
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