import React from 'react';
import Image from 'next/image';
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
                <CardImageContainer>
                    {project.id === "p4" ?
                        <CardImage>
                        <Image 
                            src={project.image}
                            alt="project image"
                            width={1688}
                            height={896}
                            layout="responsive"
                            priority={true}
                        />
                        </CardImage>
                    :
                    <Link href={`/project/${project.id}`} passHref>
                    <CardImage>
                        <Image 
                            src={project.image}
                            alt="project image"
                            width={1688}
                            height={896}
                            layout="responsive"
                            priority={true}
                        />
                    </CardImage>
                    </Link>
                    }
                </CardImageContainer>
                <CardContent>
                    {project.id === "p4" ?
                    <CardTitle>
                        {project.title}
                    </CardTitle>
                    :
                    <Link href={`/project/${project.id}`} passHref>
                    <CardTitle>
                        {project.title}
                    </CardTitle>
                    </Link>
                    }
                    <CardSubtitle>
                        {project.description}
                    </CardSubtitle>
                </CardContent>
                {project.id === "p4" ?
                <div></div>
                :
                <Link href={`/project/${project.id}`}>
                <a><span>{"View Project >"}</span></a>
                </Link>
                }
            </Card>            
        ))}
        </CardGrid>
    </Section>
  )
}

export default Projects