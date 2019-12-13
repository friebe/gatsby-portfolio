import React from "react"
import {
  FaGithub,
  FaXing,
  FaCodepen,
  FaMeetup,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"
import styled from "styled-components"

const Medialinks = styled.div`
  a {
    margin-right: 35px;
    font-size: 1.7em;

    svg {
      &:hover {
        cursor: pointer;
        transform: translateY(-0.25em);
        transition: all 0.15s ease-out;
      }
    }
  }
`

export default function MediaLinks() {
  return (
    <Medialinks>
      <a
        href="https://github.com/friebe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          style={{ paddingLeft: 0, marginLeft: 0 }}
          className="footer__social--item"
        />
      </a>
      <a
        href="https://www.xing.com/profile/Jan_Friebe2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXing className="footer__social--item" />
      </a>
      <a
        href="https://codepen.io/jfr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaCodepen className="footer__social--item" />
      </a>
      <a
        href="https://www.meetup.com/de-DE/members/241494960/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMeetup className="footer__social--item" />
      </a>
      <a href="mailto:kontakt@jan-friebe.de">
        <FaEnvelope className="footer__social--item" />
      </a>
      <a
        href="https://twitter.com/jan_friebe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="footer__social--item" />
      </a>
      <a href="tel:004915759460303" target="_blank" rel="noopener noreferrer">
        <FaPhone className="footer__social--item" />
      </a>
    </Medialinks>
  )
}
