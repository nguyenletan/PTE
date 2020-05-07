import React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children, doc }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/png"
          href="/public/favicon.png"
        />
      </Helmet>
      {children}
    </React.Fragment>
  )
}

export default Wrapper
