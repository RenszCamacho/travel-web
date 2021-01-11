import React from "react"

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

function images() {
  const data = useStaticQuery(graphql`
  query {
    allFile (
      filter {
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}
        name: {nin: ["background", "background2"]}
      }
    }
  ){
    edges {
      node {
        base 
        childImageSharp {
          fluid {
            ....GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `)
  return (
    <div>
      <h1>View our Destination</h1>
      <div>
        {data.allFile.edges.node.map((image, key) => {
          return (
            <Img
              key={key}
              fluid={image.childImageSharp.fluid}
              alt={image.base.split(".")[0]}
            />
          )
        })}
      </div>
    </div>
  )
}

export default images
