import React, { useContext } from 'react'
import Link from 'next/link'
import ToggleThemeContext from '../../context/ToggleThemeContext';
import { StyledHeader, StyledNav, NavToggle, NavToggleLabel, NavIcon, NavLinks, NavLink, ModeToggleButton, ThemeImage } from './Header.styled'
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';

const Header = () => {

    const { lightDarkTheme, toggleLightDarkTheme } = useContext(ToggleThemeContext);

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
                        <NavLink onMouseDown={e => e.preventDefault()}>Home</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/#about" passHref >
                        <NavLink onMouseDown={e => e.preventDefault()}>About</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/#skills" passHref>
                        <NavLink onMouseDown={e => e.preventDefault()}>Skills</NavLink>
                    </Link>
                </li>
                <li>
                    <Link href="/#projects" passHref>
                        <NavLink onMouseDown={e => e.preventDefault()}>Projects</NavLink>
                    </Link>            
                </li>
                <li>
                    <Link href="/#contact" passHref>
                        <NavLink onMouseDown={e => e.preventDefault()}>Contact</NavLink>
                    </Link>
                </li>
            </NavLinks>
            <ModeToggleButton onClick={toggleLightDarkTheme} onMouseDown={e => e.preventDefault()}>
                { lightDarkTheme == 'light' ? <RiMoonClearLine /> : <RiSunLine/> }
            </ModeToggleButton>
        </StyledNav>
    </StyledHeader>
  )
}

export default Header