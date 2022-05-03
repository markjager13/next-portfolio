import fs from 'fs/promises';
import path from 'path';
import GlobalStyles from '../styles/globals';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import { Layout } from '../layout/Layout';

export default function Home(props) {
  const { projects } = props;

  return (
    <Layout>
      <GlobalStyles />
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects}/>
      <Contact />
    </Layout>
  )
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), 'src/data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
      return {
        redirect: {
          destination: '/no-data',
        },
      };
    }
  
    if (data.projects.length === 0) {
      return { notFound: true };
    }

  return {
      props: {
          projects: data.projects
      },
  };
}
