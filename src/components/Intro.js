/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Intros = styled.div`
  height: calc(100vh - 200px);
  color: #111d33;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: -0.005em;

  a {
    background-image: none;
  }

  p {
    width: 66%;
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
      cursor: pointer;
      transform: translateY(-0.25em);
      transition: all 0.15s ease-out;
    }
  }
`

const Intro = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Intros>
        <h2>Hello!</h2>
        <h1>
          My name is {author}.<br />I build things for the web.
        </h1>
        <p>
          I am a frontend developer with an interest in new technologies. I
          mostly build things in JavaScript.
        </p>

        <a
          class=""
          href="mailto:kontakt@jan-friebe.de"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button class="">Get in touch</button>
        </a>
      </Intros>
    </div>
  )
}

export default Intro
