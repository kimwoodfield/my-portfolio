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
`

export default function Home() {
  return (
    <Theme>
      <Head>
        <title>Home | Kim's Hangout</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <Headline />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Theme>
  )
}
