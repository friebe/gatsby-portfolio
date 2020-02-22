import React from "react"
import styled from "styled-components"

const Logos = styled.div`
  font-weight: 600;

    @media only screen and (max-width: 600px) {
      .logo-description {
        display:none;
      }
  }
`
const Logo = () => <Logos>JF <span className="logo-description">Webentwicklung</span></Logos>

export default Logo
