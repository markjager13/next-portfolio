import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section, Title, CardGrid, Card, CardImage, CardContent, CardTitle, CardSubtitle, CardImageContainer } from './styles/Projects.styled';

const Projects = () => {
  return (
    <Section>
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
                        Project Title
                    </CardTitle>
                    <CardSubtitle>
                        Alias itaque praesentium
                    </CardSubtitle>
                </CardContent>
                <Link href="/">
                    <a>
                        {"View Project >"}
                    </a>
                </Link>
            </Card>
        </CardGrid>
    </Section>
  )
}

export default Projects