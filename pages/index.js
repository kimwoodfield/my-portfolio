import styled from 'styled-components'
import Head from 'next/head'

import Headline from '../src/components/Global/Headline'
import About from '../src/components/Home/About'
import Projects from '../src/components/Home/Projects'
import Skills from '../src/components/Home/Skills'
import Contact from '../src/components/Home/Contact'

const Theme = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  @media (min-width: 1000px) {
    padding: 25px;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Bio = styled.div`
`
const Content = styled.div`
`
const TitleContainer = styled.div`
  width: 100%;
  max-width: 1187px;
`
const Container = styled.div`
  @media (min-width: 1000px) {
    display: flex;
  }
`

export default function Home() {
  return (
    <Theme>
      <TitleContainer>
        <Head>
          <title>Kim Woodfield - Software Developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Headline />
      </TitleContainer>
      <Container>
        <Bio>
          <About />
        </Bio>
        <Content>
          <Projects />
          <Skills />
          <Contact />
        </Content>
      </Container>
    </Theme>
  )
}
