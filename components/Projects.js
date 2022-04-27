import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section, Title, CardGrid, Card, CardImage, CardContent, CardTitle, CardSubtitle, CardImageContainer } from './styles/Projects.styled';
import { projects } from '../constants/constants';

const Projects = () => {

    const ROUTE_PROJECT_ID = "project/[id]";

  return (
    <Section id="projects">
        <Title>
            {"What I've Been Working On"}
        </Title>
        <CardGrid>
        {projects.map(project => (
            <Card key={`project-${project.id}`}>
                <CardImageContainer>
                    <CardImage>
                        <Image 
                            src={project.image}
                            alt="project image"
                            width={480}
                            height={480}
                            layout="responsive"
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
                <Link href={{
                    pathname: ROUTE_PROJECT_ID,
                    query: { id: project.id }
                }}>
                    <a><span>{"View Project >"}</span></a>
                </Link>
        </Card>            
        ))}
        
        
        
        
        {/* 
            <Card>
                <CardImageContainer>
                    <CardImage>
                        <Image 
                            className="project1__img"
                            src={projects.at(0).image}
                            alt="project image"
                            width={480}
                            height={480}
                            layout="responsive"
                        />
                    </CardImage>
                </CardImageContainer>
                <CardContent>
                    <CardTitle>
                        {projects.at(0).title}
                    </CardTitle>
                    <CardSubtitle>
                        {projects.at(0).description}
                    </CardSubtitle>
                </CardContent>
                <Link href={'/project/' + projects.id} key={projects.id}>
                    <a><span>{"View Project >"}</span></a>
                </Link>
            </Card>
            <Card>
                <CardImageContainer>
                    <CardImage>
                        <Image 
                            className="project2__img"
                            src={projects.at(1).image}
                            alt="project image"
                            width={480}
                            height={480}
                            layout="responsive"
                        />
                    </CardImage>
                </CardImageContainer>
                <CardContent>
                    <CardTitle>
                        {projects.at(1).title}
                    </CardTitle>
                    <CardSubtitle>
                        {projects.at(1).description}
                    </CardSubtitle>
                </CardContent>
                <Link href="/">
                    <a><span>{"View Project >"}</span></a>
                </Link>
            </Card>
            <Card>
                <CardImageContainer>
                    <CardImage>
                        <Image 
                            className="project3__img"
                            src={projects.at(2).image}
                            alt="project image"
                            width={480}
                            height={480}
                            layout="responsive"
                        />
                    </CardImage>
                </CardImageContainer>
                <CardContent>
                    <CardTitle>
                        {projects.at(2).title}
                    </CardTitle>
                    <CardSubtitle>
                        {projects.at(2).description}
                    </CardSubtitle>
                </CardContent>
                <Link href="/">
                    <a><span>{"View Project >"}</span></a>
                </Link>
            </Card>
        */}
        </CardGrid>
    </Section>
  )
}

export default Projects