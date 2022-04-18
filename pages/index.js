import Head from 'next/head';
import GlobalStyles from '../components/styles/Global';
import Header from '../components/Header';
import About from '../components/About';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <About />
      <div>
        Skills
      </div>
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
