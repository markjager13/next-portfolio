import React from 'react'
import Link from 'next/link'
import { Section, Title } from '../components/styles/ProjectItem.styled';

const project_item = () => {
  return (
    <Section>
        <Title>
            The title <strong>of my project</strong>
        </Title>
    </Section>
  )
}

export default project_item