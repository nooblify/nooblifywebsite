import React from 'react'
import Layout from '../components/MyLayout.js'

function Error({ statusCode }) {
  return (
    <Layout>
        <div className="container mx-auto">
        <p className="font-semibold text-4xl text-noobdark-500 font-noobheading my-6 mx-2 text-center">
        {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
        <img className="max-w-3xl mx-auto" src="/404.svg"/>
        </div>
        
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error