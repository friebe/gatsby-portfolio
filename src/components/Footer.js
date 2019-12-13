import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Footers = styled.footer`
  font-size: 0.8em;
`

const Footer = () => (
  <Footers>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a> and love{" "}
    <Link activeClassName="Link--is-active" to="/impress">
      Impress
    </Link>
    {" | "}
    <Link activeClassName="Link--is-active" to="/privacy">
      Privacy
    </Link>
  </Footers>
)

export default Footer
