import fs from 'fs/promises';
import path from 'path';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import GlobalStyles from '../../styles/globals';
import { Section, Title, ContentWrapper, ContentTable, ExternalLink, ContentText } from './ProjectDetailsPage.styled';
import { Layout } from '../../layout/Layout';

const ProjectDetailsPage = (props) => {

  const { loadedProject } = props;

  if (!loadedProject) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <GlobalStyles />
      <Section>
        <Title>
          {loadedProject.title}
        </Title>
        <ContentWrapper>
          <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </ContentText>
          <ContentTable>
            <thead>
              <tr>
                <th>Stack</th>
                <th>Code</th>
                <th>Demo</th>
              </tr>
            </thead>
            <tbody>
              {loadedProject.stack.map((stackItem, index) => (
                <tr key={index}>
                  <td>{stackItem}</td>
                  <td>{index === 0 ? <Link href={loadedProject.github} passHref><ExternalLink>Repository</ExternalLink></Link> : ""}</td>
                  <td>{index === 0 ? <Link href={loadedProject.demo} passHref><ExternalLink>View Site</ExternalLink></Link> : ""}</td>
                </tr>
              ))}
            </tbody>
          </ContentTable>
          <Image 
                src="/images/portfolio-details.jpg"
                alt="project image"
                width={931}
                height={285}
                layout="responsive"
                priority="false"
              />
          <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </ContentText>
          <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </ContentText>
        </ContentWrapper>
      </Section>
    </Layout>
  )
}

async function getData() {
  const filePath = path.join(process.cwd(), 'src/data', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const projectId = params.pid;
  const data = await getData();
  const project = data.projects.find((project) => project.id === projectId);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProject: project,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.projects.map((project) => project.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProjectDetailsPage