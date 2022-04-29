import React, { useState } from 'react'
import Link from 'next/link'
import { StyledHeader, StyledNav, NavToggle, NavToggleLabel, NavIcon, NavLinks, NavLink, ModeToggleButton } from './Header.styled'
import { RiMoonClearLine } from 'react-icons/ri';

const Header = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        setDarkMode(!isDarkMode);
        // console.log(isDarkMode);
     }

  return (
    <StyledHeader id="header">
        <StyledNav>
            <NavToggle type="checkbox" id="navToggle"/>
            <NavToggleLabel htmlFor='navToggle'>
                <NavIcon />
            </NavToggleLabel>
            <NavLinks>
                <li>
                    <Link href="/#top" passHref>
                        <NavLink>Home</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/#skills" passHref>
                        <NavLink>Skills</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/#projects" passHref>
                        <NavLink>Projects</NavLink>
                    </Link>            
                </li>
                <li>
                    <Link href="/#contact" passHref>
                        <NavLink>Contact</NavLink>
                    </Link>
                </li>
            </NavLinks>
            <ModeToggleButton>
                <RiMoonClearLine/>
            </ModeToggleButton>
        </StyledNav>
    </StyledHeader>
  )
}

export default Header