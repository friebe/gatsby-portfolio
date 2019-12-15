import React from "react"
import Layout from "../components/layout"
import Intro from "../components/Intro"
import SEO from "../components/seo"

export default function index() {
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
    </Layout>
  )
}
