import React from 'react'
import Link from 'next/link';
import { Section, Title, EmailLink } from './styles/Contact.styled';


const Contact = () => {
  return (
    <Section>
        <Title>Contact</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id vehicula eros. Morbi rutrum non dui sit amet gravida. Maecenas dictum eget turpis at accumsan. Ut vulputate vehicula lectus sit amet pulvinar. Donec.</p>
            <Link href="mailto: test@test.com" passHref>
                <EmailLink><span>test@test.com</span></EmailLink>
            </Link>
    </Section>
  )
}

export default Contact