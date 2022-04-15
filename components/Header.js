import React, { useState } from 'react'
import Link from 'next/link'
import { StyledHeader, StyledNav, NavToggle, NavToggleLabel, NavIcon, NavLinks, NavLink } from './styles/Header.styled'



const Header = () => {

  return (
    <StyledHeader>
        <StyledNav>
            <NavToggle type="checkbox" id="navToggle"/>
            <NavToggleLabel htmlFor='navToggle'>
                <NavIcon />
            </NavToggleLabel>
            <NavLinks className="navLinks2">
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