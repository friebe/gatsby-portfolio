import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Avatar from "../components/janfriebeavatar.png"

const Intro = styled.div`
  color: #111d33;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: -0.005em;

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
const Container = styled.div`
  display: grid;
  grid-template-columns: 340px auto;
  grid-template-rows: 50px auto 50px;
`
const Text = styled.div`
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: span 1;
`
const Image = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
`

export default function about() {
  return (
    <Layout>
      <Intro>
        <h2>Curriculum vitae</h2>
        <h1>A German based and employed web developer from NRW.</h1>
        <Container>
          <Image>
            <img src={Avatar} alt="jan-friebe avatar" />
          </Image>
          <Text>
            Born 1992 in Gelsenkirchen he has been working in the digital media
            since 2009.
            <br />
            <br />
            Ambitious, willing to learn and passionate developer with fun and
            interest in new technologies. He feels most comfortable in frontend
            dev as well as in the design of web and print media.
            <br />
            <br /> The journey began with a passion for creativity and a hobby
            for drawing, design and the dedication to art. After completing my
            education as a design assistant in digital and print media in 2012,
            I decided to extend my digital and technical skills in addition to
            the creative part.I completed a further training as an IT specialist
            in the field of application development in order to create a
            symbiosis between technology and design.
            <br />
            <br /> I quickly realized that there was more to learn besides
            creativity on the web and that the world of programming languages
            offers endless possibilities. It fascinated me still today.
            <br />
            <br /> At the moment I work as a developer at a startup company in
            Essen. Mostly I deal with frontend things and JavaScript. Especially
            I build things with react.js. Besides the frontend development I
            follow current web trends in articles and blogs. I am an
            enthusiastic user of the newsreader app Feedly and love RSS feeds. I
            like to attend online courses for further education and often take
            part in meetups, conferences, seminars, camps and workshops. I am
            happy to pass on my acquired knowledge at event talks. I like the
            variety and the people who burn with enthusiasm for their work.
            <br />
            <br /> Besides topics of frontend development and the related UI/UX
            I am interested in general topics like SEO and performance. Sports,
            cooking or books about self-organization and biographies of great
            personalities offer variety from everyday life.
            <br />
            <br /> As a JavaScript enthusiast I am interested in the basics of
            the language, especially in UI frameworks, their ecosystems and
            toolings.
            <br />
            <br /> I like to look at successful and beautiful web projects. Code
            best practices, patterns and code quality a la{" "}
            <a href="https://www.clean-code-developer.de">clean code</a> play an
            important role in my everyday life as a developer.
            <br />
            <br /> 2012 I got to know the Content Management System{" "}
            <a href="https://www.contao.org">Contao</a> with its various
            programming possibilities as an editor and developer and have been
            involved in the community.
          </Text>
        </Container>
      </Intro>
    </Layout>
  )
}
