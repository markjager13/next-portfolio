import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AboutSection, AboutTitle, ProfileImg, AboutText } from './About.styled'

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
            <p>My interest in programming started when I was planning my transition out of the Army. I got hooked on a few online tutorials and decided to pursue a CS degree.</p>
            <p>But what really transformed my interest was when I deployed an app to solve a problem at work. It was a simple tool, but I was so thrilled that I was able to solve an actual problem with code.</p>
            <p>That moment gave me a clear understanding of why I wanted to build software. The process of visualizing a solution, building it, and bringing it to life is very rewarding to me.</p>
        </AboutText>
    </AboutSection>
  )
}

export default About