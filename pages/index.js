import Head from 'next/head';
import GlobalStyles from '../components/styles/Global';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <About />
      <Skills />
      <div>
        Projects
      </div>
      <div>
        Contact
      </div>
      <div>
        Footer
      </div>
    </>
  )
}
