import React from 'react'
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/index';
import { SkillsList } from './Skills.styled';

const Skills = () => {
  return (
    <Section id="skills">
        <SectionTitle>My Skills</SectionTitle>
        <SectionText>
          Since graduating, my focus has been on strengthening my computer science fundamentals and exploring full stack development concepts. Lately, most of my time has been dedicated to building projects using JavaScript, React, Python, and PHP. 
        </SectionText>
        <SkillsList>
            <li>JavaScript</li>
            <li>React</li>          
            <li>Node.js</li>
            <li>PHP</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>  
            <li>Git</li>
            <li>Java</li>
            <li>SQL</li>
        </SkillsList>
    </Section>
  )
}

export default Skills