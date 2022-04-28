import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Image from 'next/image';
import GlobalStyles from '../../components/styles/Global';
import { Section, Title, ContentWrapper, ContentDetails, ExternalLink, ContentText } from '../../components/styles/Project.styled';
import { projects } from '../../constants/constants';

const Project = () => {

  const router = useRouter();
  const { id } = router.query;

  return (
    <>
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
          <ContentDetails>
            <tbody>
              <tr>
                <th>Stack</th>
                <th>Code</th>
                <th>Demo</th>
              </tr>
              <tr>
                <td>{projects.at(id).tags[0]}</td>
                <td><Link href={projects.at(id).source} passHref><ExternalLink>Repository</ExternalLink></Link></td>
                <td><Link href={projects.at(id).visit} passHref><ExternalLink>View Site</ExternalLink></Link></td>
              </tr>
              <tr>
                <td>{projects.at(id).tags[1]}</td>
              </tr>
            </tbody>
          </ContentDetails>
          <Image 
                src="/portfolio-details.jpg"
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
    </>
  )
}

export default Project