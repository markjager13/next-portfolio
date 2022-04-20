import Head from 'next/head';
import GlobalStyles from '../components/styles/Global';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <About />
      <Skills />
      <Projects />
      <div>
        Contact
      </div>
      <div>
        Footer
      </div>
    </>
  )
}
