import React from 'react'
import Link from 'next/link';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/index';
import { ContactEmail, EmailLink, ContactSocial, SocialList } from './Contact.styled';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id vehicula eros. Morbi rutrum non dui sit amet gravida. Maecenas dictum eget turpis at accumsan. Ut vulputate vehicula lectus sit amet pulvinar. Donec.</SectionText>
      <ContactEmail>
        <Link href="mailto: test@test.com" passHref>
          <EmailLink>
              <span>test@test.com</span>
          </EmailLink>
        </Link>
      </ContactEmail>
      <ContactSocial>
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
      </ContactSocial>
    </Section>
  )
}

export default Contact