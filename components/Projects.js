import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section, Title, CardGrid, Card, CardImage, CardContent, CardTitle, CardSubtitle, CardImageContainer } from './styles/Projects.styled';

const Projects = () => {
  return (
    <Section id="projects">
        <Title>
            {"What I've Been Working On"}
        </Title>
        <CardGrid>
            <Card>
                <CardImageContainer>
                    <CardImage>
                        <Image 
                            className="project1__img"
                            src="/projectimage01.jpg"
                            alt="project image"
                            width={480}
                            height={480}
                            layout="responsive"
                        />
                    </CardImage>
                </CardImageContainer>
                <CardContent>
                    <CardTitle>
                        Gallery Shift Calculator
                    </CardTitle>
                    <CardSubtitle>
                        A tool designed to improve office efficiency by generating a shift schedule and statistics form. 
                    </CardSubtitle>
                </CardContent>
                <Link href="/project_item">
                    <a><span>{"View Project >"}</span></a>
                </Link>
            </Card>
            <Card>
                <CardImageContainer>
                    <CardImage>
                        <Image 
                            className="project1__img"
                            src="/projectimage01.jpg"
                            alt="project image"
                            width={480}
                            height={480}
                            layout="responsive"
                        />
                    </CardImage>
                </CardImageContainer>
                <CardContent>
                    <CardTitle>
                        Project Title
                    </CardTitle>
                    <CardSubtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
                            className="project1__img"
                            src="/projectimage01.jpg"
                            alt="project image"
                            width={480}
                            height={480}
                            layout="responsive"
                        />
                    </CardImage>
                </CardImageContainer>
                <CardContent>
                    <CardTitle>
                        Project Title
                    </CardTitle>
                    <CardSubtitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra mi non purus. Pellentesque viverra mi non purus.
                    </CardSubtitle>
                </CardContent>
                <Link href="/">
                    <a><span>{"View Project >"}</span></a>
                </Link>
            </Card>
        </CardGrid>
    </Section>
  )
}

export default Projects