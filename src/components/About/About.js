import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AboutSection, AboutTitle, AboutSubTitle, ProfileImg, AboutText, SocialList } from './About.styled'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const About = () => {
  return (
    <AboutSection id="about">
        <AboutTitle>
            About Me
        </AboutTitle>

        <ProfileImg>
            <Image 
                src="/images/profile2.jpg"
                alt="my profile picture"
                width={1002}
                height={1006} 
            />
        </ProfileImg>
        <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dignissim neque. In pretium nisl.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a pellentesque mauris. Duis in nibh tempus, euismod purus eu, cursus lorem. Nam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a pellentesque mauris. Duis in nibh tempus, euismod purus eu, cursus lorem. Nam.
        </AboutText>
    </AboutSection>
  )
}

export default About