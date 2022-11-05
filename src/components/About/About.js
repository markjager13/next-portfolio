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
            <p>My interest in programming started when I was planning my transition out of the Army. After reading a few textbooks and learning the basics, I decided to pursue a degree in computer science.</p>
            <p>It was challenging, but it was a great decision. I learned a great deal about object-oriented programming, data structures, and algorithms.</p>
            <p>Above all, I learned why I wanted to build software. The process of visualizing a solution, building it, and bringing it to life is very rewarding to me.</p>
        </AboutText>
    </AboutSection>
  )
}

export default About