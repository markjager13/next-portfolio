import React, { useState } from 'react'
import Link from 'next/link'
import { StyledHeader, StyledNav, NavToggle, NavToggleLabel, NavIcon, NavLinks, NavLink, ModeToggle } from './styles/Header.styled'
import { BiMoon } from 'react-icons/bi';



const Header = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!isDarkMode);
        // console.log(isDarkMode);
     }

  return (
    <StyledHeader>
        <StyledNav>
            <ModeToggle onClick={handleToggle}>
                <BiMoon />
            </ModeToggle>
            <NavToggle type="checkbox" id="navToggle"/>
            <NavToggleLabel htmlFor='navToggle'>
                <NavIcon />
            </NavToggleLabel>
            <NavLinks id="navLinks2">
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