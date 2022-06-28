import React from 'react'
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/index';
import { SkillsList } from './Skills.styled';

const Skills = () => {
  return (
    <Section id="skills">
        <SectionTitle>My Skills</SectionTitle>
        <SectionText>
          My courses taught me a great deal about object-oriented programming, data structures, and algorithms. Since graduating, I’ve became interested in the web and full stack development. These days, much of my free time is spent learning JavaScript and the React ecosystem. 
        </SectionText>
        <SkillsList>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Java</li>
            <li>SQL</li>
        </SkillsList>
    </Section>
  )
}

export default Skills