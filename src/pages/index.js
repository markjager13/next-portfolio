import GlobalStyles from '../styles/globals';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';

export default function Home() {
  return (
    <Layout>
      <GlobalStyles />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}
