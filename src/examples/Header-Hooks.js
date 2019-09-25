import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
const getData = graphql`
  query {
  site{
    siteMetadata{
      description
      title
      author
      data{
        name
      }
    }
  }
}`

const Header = () => {
  const { site: { siteMetadata: info } } = useStaticQuery(getData)

  return (
    <div>
      <h1>Author: {info.author}</h1>
      <h1>Title: {info.title}</h1>
    </div>
  )
}

export default Header
