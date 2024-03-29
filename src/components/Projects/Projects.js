import React from 'react';
import Link from 'next/link';

import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/index';
import { CardGrid, Card, CardImage, CardContent, CardTitle, CardSubtitle, CardImageContainer } from './Projects.styled';

const Projects = ( {projects} ) => {

  return (
    <Section id="projects">
        <SectionTitle>
            {"What I've Been Working On"}
        </SectionTitle>
        <SectionText>
            My curiosity is always driving me to explore new concepts and frameworks. Take a look at some of my projects to see what I’ve been learning.
        </SectionText>
        <CardGrid>
        {projects.map(project => (
            <Card key={project.id}>
                {project.id === "p4" ?
                    <>
                    <CardImageContainer>
                        <CardImage>
                            <img 
                                src={project.image}
                                alt="project image"
                            />
                        </CardImage>
                    </CardImageContainer>
                    <CardContent>
                        <CardTitle>
                            {project.title}
                        </CardTitle>
                        <CardSubtitle>
                            {project.description}
                        </CardSubtitle>
                    </CardContent>
                    <Link href={project.github}>
                    <a target="_blank" rel="noopener noreferrer"><span>{"View GitHub >"}</span></a>
                    </Link>
                    </>
                :
                    <>
                    <CardImageContainer>
                        <Link href={`/project/${project.id}`} passHref>
                            <CardImage>
                                <img 
                                    src={project.image}
                                    alt="project image"
                                />
                            </CardImage>
                        </Link>
                    </CardImageContainer>
                    <CardContent>
                        <Link href={`/project/${project.id}`} passHref>
                            <CardTitle>
                                {project.title}
                            </CardTitle>
                        </Link>
                        <CardSubtitle>
                            {project.description}
                        </CardSubtitle>
                    </CardContent>
                    <Link href={`/project/${project.id}`}>
                    <a><span>{"View Project >"}</span></a>
                    </Link>
                </>
                }
            </Card>            
        ))}
        </CardGrid>
    </Section>
  )
}

export default Projects