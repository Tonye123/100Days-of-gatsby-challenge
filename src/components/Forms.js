import React from 'react'
import styled from '@emotion/styled'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'



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

   input.error, textarea.error{
    border-color: red;
    color: red;
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



 const Forms = ()=> {
  return (
    
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
                        <h2>Lets work together!</h2>
                        <label  htmlFor="firstName">First Name</label>
                        <Field name="firstName">
                      {({
                    field, 
                    form: { touched, errors }, 
                    meta,
                      }) => (
                    <div>
                      <input type="text" placeholder="firstName" {...field} 
                      className= {meta.touched && meta.error ? "error" : '' }/>
                     </div>
                      )}
                        </Field>
                        <ErrorMessage name="firstName" />  

                        <label  htmlFor="email">Email Address</label>
                        <Field name="email">
                        {({
                    field, 
                    form: { touched, errors }, 
                    meta,
                      }) => (
                    <div>
                      <input type="email" placeholder="email" {...field} 
                      className= {meta.touched && meta.error ? "error" : '' }/>
                     </div>
                      )}
                        </Field>
                        <ErrorMessage name="email" />

                        <label htmlFor="message"> Leave a message</label>
                            <Field name="message"   className="form-input">
                            {({
                        field, 
                        form: { touched, errors }, 
                        meta,
                          }) => (
                        <div>
                          <textarea type="text"  {...field} 
                          className= {meta.touched && meta.error ? "error" : '' }></textarea>
                        </div>
                          )}

                        </Field>


                        <ErrorMessage name="message" /> 
                        <button type="submit" disabled={isSubmitting}>Submit</button>

                    </StyledDiv>
                  
                </Form>
                )}
                

            </Formik>
      

  )


        }

        export default Forms