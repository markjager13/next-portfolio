import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import GlobalStyles from '../components/styles/Global';
import { Section, Title, SubTitle, TitleImage, ProjectLinkWrapper, ProjectLink, NextLink, PrevLink } from '../components/styles/ProjectItem.styled';
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
              className="project1__img"
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
            Project GitHub
          </a>
        </Link>
        <span> | </span>
        <Link href="#" passHref>
          <a>
            <FaRegEye />
            Live Demo
          </a>
        </Link>
        <Link href="#" passHref>
          <NextLink>
            <FaChevronRight />
          </NextLink>
        </Link>
      </ProjectLinkWrapper>
    </>
  )
}

export default project_item