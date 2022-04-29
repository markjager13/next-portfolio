import React from 'react'
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/index';
import { SkillsList } from './Skills.styled';

const Skills = () => {
  return (
    <Section id="skills">
        <SectionTitle>My Skills</SectionTitle>
        <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id vehicula eros. Morbi rutrum non dui sit amet gravida. Maecenas dictum eget turpis at accumsan. Ut vulputate vehicula lectus sit amet pulvinar. Donec.</SectionText>
        <SkillsList>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Styled-Components</li>
            <li>Git</li>
            <li>Node.js</li>
            <li>Express</li>
        </SkillsList>
    </Section>
  )
}

export default Skills