import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'


import { Link } from 'gatsby'

const NotFound = () => {
    return (
        <Layout>
            <SEO title="404" />
            <h1>Page Not Found</h1>
            <p><Link to="/"> Head Home</Link></p>
        </Layout>

    )
}


export default NotFound