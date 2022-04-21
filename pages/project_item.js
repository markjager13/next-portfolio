import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import GlobalStyles from '../components/styles/Global';
import { Section, Title, SubTitle, TitleImage, ProjectLinkWrapper, NextLink, PrevLink, ContentWrapper, ContentText } from '../components/styles/ProjectItem.styled';
import { FaChevronLeft, FaChevronRight, FaGithub, FaRegEye } from 'react-icons/fa';

const project_item = () => {
  return (
    <>
      <GlobalStyles />
      <Section>
          <Title>
              Gallery <br />
              Shift Calculator
          </Title>
          <SubTitle>
            React, CSS Modules, Netlify
          </SubTitle>
          <TitleImage>
            <Image 
              src="/projectimage01.jpg"
              alt="project image"
              width={480}
              height={480}
              layout="responsive"
            />
          </TitleImage>
      </Section>
      <ProjectLinkWrapper>
        <Link href="#" passHref>
          <PrevLink>
            <FaChevronLeft />
          </PrevLink>
        </Link>
        <Link href="#" passHref>
          <a>
            <FaGithub />
            GitHub
          </a>
        </Link>
        <span> | </span>
        <Link href="#" passHref>
          <a>
            <FaRegEye />
            Demo
          </a>
        </Link>
        <Link href="#" passHref>
          <NextLink>
            <FaChevronRight />
          </NextLink>
        </Link>
      </ProjectLinkWrapper>
      <ContentWrapper>
        <ContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </ContentText>
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
    </>
  )
}

export default project_item