import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Image />
  </Layout>
)

export default IndexPage
