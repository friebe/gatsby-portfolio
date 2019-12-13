import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "./Logo"

const HeaderContainer = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    background-image: none;
  }
`

const HeaderLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2.5em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;

  a {
    color: currentColor;
    background-image: none;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    /* padding-bottom: 1.25em; */
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: transparent;
      bottom: -3px;
      /* right: 50%; */
      /* margin-right: -9px; */
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: #1ca086;
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: #1ca086;
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/about">
          Profile
        </Link>
        <Link activeClassName="Link--is-active" to="/work">
          Work
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          Blog
        </Link>
        <Link activeClassName="Link--is-active" to="/contact">
          Contact
        </Link>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
