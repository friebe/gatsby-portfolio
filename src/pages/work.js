import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import MediaLinks from "../components/MediaLinks"
import SEO from "../components/seo"

const Intro = styled.div`
  height: calc(100vh - 200px);
  color: #111d33;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: -0.005em;

  a {
    background-image: none;
    margin-right: 30px;
    font-size: 1.5em;

    &:hover {
      cursor: pointer;
    }
  }

  p {
    width: 86%;
  }

  h1 {
    font-size: 2.7em;
    line-height: 1.1;
  }

  button {
    color: #1ca086;
    background: #fff;
    border: 2px solid #1ca086;
    box-shadow: 0 14px 49px rgba(0, 0, 0, 0.07);
    border-radius: 5px;
    font-size: 1em;
    padding: 1.1em 3em;
    display: inline;

    &:hover {
      transform: translateY(-0.25em);
      transition: all 0.15s ease-out;
    }
  }
`

export default function work() {
  return (
    <Layout>
      <SEO title="Work" />
      <Intro>
        <h2>Interest</h2>
        <h1>If you realy see my work</h1>
        <p>Feel free to visit my github or other sources</p>
        <MediaLinks />
      </Intro>
    </Layout>
  )
}
