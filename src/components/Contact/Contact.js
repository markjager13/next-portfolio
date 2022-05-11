import React from 'react'
import Link from 'next/link';
import { Section, SectionTitle, SectionText } from '../../styles/GlobalComponents/index';
import { ContactEmail, EmailLink, ContactSocial, SocialList } from './Contact.styled';
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <SectionText>
        I am currently looking to contribute my skills to a team where I can help build memorable products and grow as a developer. If you are interested in learning more about how I can contribute, feel free to contact me via email or on social media. 
      </SectionText>
      <ContactEmail>
        <Link href="mailto: test@test.com" passHref>
          <EmailLink>
              <span>markjager13@gmail.com</span>
          </EmailLink>
        </Link>
      </ContactEmail>
      <ContactSocial>
        <SocialList>
              <li>
                  <Link href="https://www.linkedin.com/in/markjager13/" passHref>
                      <a>
                          <AiFillLinkedin />
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="https://github.com/markjager13" passHref>
                      <a>
                          <AiFillGithub />
                      </a>
                  </Link>
              </li>
              <li>
                  <Link href="https://twitter.com/MarkJager13" passHref>
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