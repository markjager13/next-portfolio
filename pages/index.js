import Head from 'next/head';
import GlobalStyles from '../components/styles/Global';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div>
        About
      </div>
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
