import React from "react"

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

function Images() {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          name: { nin: ["background", "background2"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
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
        {data.allFile.edges.map((image, key) => (
          <Img
            key={key}
            className="imagen-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default Images
