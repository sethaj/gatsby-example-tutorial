import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../images/kitty-3.jpg'
import Image from 'gatsby-image'

const getImages = graphql`
{
  fixed: file(relativePath:{eq: "kitty-1.jpg"}) {
    childImageSharp {
      fixed(width:200, grayscale:true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath:{eq: "kitty-2.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img src={img} alt="a kitty" className="basic"/>
        <h2>content</h2>
      </article>
      <article>
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
        <h2>content</h2>
      </article>
      <article>
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
        <h2>content</h2>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  text-tranfrom: capitalize;
  width:80vw;
  margin:0 auto 10rem auto;
  .basic {
    width:100%;
  }
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  @media (min-width:992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Images
