import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image';
import GlobalStyles from '../../styles/globals';
import { Section, Title, ContentWrapper, ContentTable, ExternalLink, ContentText } from './Project.styled';
import { projects } from '../../constants/constants';
import { Layout } from '../../layout/Layout';

const Project = () => {

  const router = useRouter();
  const { id } = router.query;
  const stack = projects.at(id).tags;

  return (
    <Layout>
      <GlobalStyles />
      <Section>
        <Title>
          {projects.at(id).title}
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
              {stack.map((stackItem, index) => {
                return(
                  <tr key={index}>
                    <td>{stackItem}</td>
                    <td>{index === 0 ? <Link href={projects.at(id).source} passHref><ExternalLink>Repository</ExternalLink></Link> : ""}</td>
                    <td>{index === 0 ? <Link href={projects.at(id).visit} passHref><ExternalLink>View Site</ExternalLink></Link> : ""}</td>
                  </tr>
                )
              })}
            </tbody>
          </ContentTable>
          <Image 
                src="/images/portfolio-details.jpg"
                alt="project image"
                width={931}
                height={285}
                layout="responsive"
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

export default Project