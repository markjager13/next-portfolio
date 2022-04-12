import React from 'react'
import Link from 'next/link'
import { StyledHeader, StyledNav, NavLinks, NavLink } from './styles/Header.styled'

const Header = () => {
  return (
    <StyledHeader>
        <StyledNav>
            <NavLinks>
                <li>
                    <Link href="/" passHref>
                        <NavLink>About</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/skills" passHref>
                        <NavLink>Skills</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/projects" passHref>
                        <NavLink>Projects</NavLink>
                    </Link>            
                </li>
                <li>
                    <Link href="/contact" passHref>
                        <NavLink>Contact</NavLink>
                    </Link>
                </li>
            </NavLinks>
        </StyledNav>
    </StyledHeader>
  )
}

export default Header