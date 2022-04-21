import React from 'react'
import { Section, Title, SkillsList } from './styles/Skills.styled';

const Skills = () => {
  return (
    <Section id="skills">
        <Title>My Skills</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id vehicula eros. Morbi rutrum non dui sit amet gravida. Maecenas dictum eget turpis at accumsan. Ut vulputate vehicula lectus sit amet pulvinar. Donec.</p>
        <SkillsList>
            <li>JavaScript ES6</li>
            <li>HTML & CSS</li>
            <li>React</li>
            <li>Styled-Components</li>
            <li>React Testing Library</li>
            <li>Node & MongoDB</li>
            <li>Git & GitHub</li>
            <li>Jira</li>
        </SkillsList>
    </Section>
  )
}

export default Skills