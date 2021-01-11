import React from "react"

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./ImagesSection.css"

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
    <div className="image-container">
      <h1>View our Destination</h1>
      <div className="image-grid">
        {data.allFile.edges.map((image, key) => (
          <Img
            key={key}
            className="image-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default Images
