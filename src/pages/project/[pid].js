import fs from 'fs/promises';
import path from 'path';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import GlobalStyles from '../../styles/globals';
import { Section, Title, ContentWrapper, ContentTable, ExternalLink, ImageContainer, ContentBlock, LeftContent, RightContent, ContentText, ContentTitle } from '../../components/Projects/ProjectDetailsPage.styled';
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
            {loadedProject.introText}
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
                  <td>{index === 0 ? <Link href={loadedProject.github} passHref><ExternalLink target="_blank" rel="noopener noreferrer">Repository</ExternalLink></Link> : ""}</td>
                  <td>{index === 0 ? <Link href={loadedProject.demo} passHref><ExternalLink target="_blank" rel="noopener noreferrer">View Site</ExternalLink></Link> : ""}</td>
                </tr>
              ))}
            </tbody>
          </ContentTable>
          <ImageContainer>
            <Image 
                  src={loadedProject.image}
                  className=""
                  alt="project image"
                  width={1688}
                  height={896}
                  layout="responsive"
                  priority="false"
              />
          </ImageContainer>
          <ContentText>
            <ContentTitle>Project Purpose and Goal</ContentTitle>
            {loadedProject.purposeText}
          </ContentText>
          <ContentBlock>
            <LeftContent>
              <Image 
                    src={loadedProject.detailsImageStack}
                    alt="project image"
                    width={150}
                    height={150}
                    layout="intrinsic"
                    priority="false"
                  />
            </LeftContent>
            <RightContent>
                  <ContentText>
                    <ContentTitle>Web Stack and Explanation</ContentTitle>
                    {loadedProject.stackText}
                </ContentText>
            </RightContent>
          </ContentBlock>
          <ContentText>
            <ContentTitle>Problems and Thought Process</ContentTitle>
            {loadedProject.problemsText}
          </ContentText>
          <ContentText>
            <ContentTitle>Lessons Learned</ContentTitle>
            {loadedProject.lessonsText}
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