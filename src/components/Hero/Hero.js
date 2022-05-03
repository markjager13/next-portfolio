import React from 'react'
import Link from 'next/link'
import { HeroSection, HeroTitle, HeroSubTitle, HeroText, SocialList } from './Hero.styled'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const Hero = () => {
  return (
    <HeroSection>
        <HeroTitle>
            {"Hi there, I'm "}
            <span>
                {"Mark"}
            </span>
        </HeroTitle>
        <HeroSubTitle>
            <h3>Front End Developer</h3>
        </HeroSubTitle>
        <HeroText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non dignissim neque. In pretium nisl.
        </HeroText>
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
    </HeroSection>
  )
}

export default Hero