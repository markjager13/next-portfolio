import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/index';
import { CardGrid, Card, CardImage, CardContent, CardTitle, CardSubtitle, CardImageContainer } from './Projects.styled';

const Projects = ( {projects} ) => {

    //const ROUTE_PROJECT_ID = "/project/[id]";

  return (
    <Section id="projects">
        <SectionTitle>
            {"What I've Been Working On"}
        </SectionTitle>
        <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id vehicula eros. Morbi rutrum non dui sit amet gravida. Maecenas dictum eget turpis at accumsan. Ut vulputate vehicula lectus sit amet pulvinar. Donec.</SectionText>
        <CardGrid>
        {projects.map(project => (
            <Card key={project.id}>
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
                <Link href={
                    `/project/${project.id}`
                    //pathname: ROUTE_PROJECT_ID,
                    //query: { id: project.id }
                }>
                    <a><span>{"View Project >"}</span></a>
                </Link>
            </Card>            
        ))}
        </CardGrid>
    </Section>
  )
}

export default Projects