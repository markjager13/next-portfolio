import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/skills">
                        <a>Skills</a>
                    </Link>
                </li>
                <li>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>            
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header