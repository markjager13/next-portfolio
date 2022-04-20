import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Section, Title, SubTitle, ProfileImg, TextBody, SocialList } from './styles/About.styled';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const About = () => {
  return (
    <Section>
        <Title>
            <p>
                {"Hi there, I'm "}
                <span>
                    {"Mark"}
                </span>
            </p>
        </Title>
        <SubTitle>
            Front End Developer
        </SubTitle>
        <ProfileImg>
            <Image 
                src="/profile1.jpg"
                alt="my profile picture"
                width={664}
                height={860} 
            />
        </ProfileImg>
        <TextBody>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dignissim neque. In pretium nisl.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a pellentesque mauris. Duis in nibh tempus, euismod purus eu, cursus lorem. Nam.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a pellentesque mauris. Duis in nibh tempus, euismod purus eu, cursus lorem. Nam.
            </p>
        </TextBody>
        <SocialList>
            <li>
                <Link href="https://www.linkedin.com/" passHref>
                    <a>
                        <AiFillLinkedin />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.github.com/" passHref>
                    <a>
                        <AiFillGithub />
                    </a>
                </Link>
            </li>
            <li>
                <Link href="https://www.twitter.com/" passHref>
                    <a>
                        <AiFillTwitterCircle />
                    </a>
                </Link>
            </li>

        </SocialList>
    </Section>
  )
}

export default About