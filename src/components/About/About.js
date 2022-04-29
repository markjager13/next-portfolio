import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SectionText } from '../../styles/GlobalComponents';
import { AboutSection, AboutTitle, AboutSubTitle, ProfileImg, SocialList } from './About.styled'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const About = () => {
  return (
    <AboutSection id="about">
        <AboutTitle>
            {"Hi there, I'm "}
            <span>
                {"Mark"}
            </span>
        </AboutTitle>
        <AboutSubTitle>
            Front End Developer
        </AboutSubTitle>
        <ProfileImg>
            <Image 
                src="/images/profile2.jpg"
                alt="my profile picture"
                width={1002}
                height={1006} 
            />
        </ProfileImg>
        <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dignissim neque. In pretium nisl.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a pellentesque mauris. Duis in nibh tempus, euismod purus eu, cursus lorem. Nam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a pellentesque mauris. Duis in nibh tempus, euismod purus eu, cursus lorem. Nam.
        </SectionText>
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
    </AboutSection>
  )
}

export default About