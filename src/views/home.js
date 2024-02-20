import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Implementation Executive</title>
        <meta property="og:title" content="Senior Implementation Executive" />
      </Helmet>
    </div>
  )
}

export default Home
