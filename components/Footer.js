import React from 'react'
import Link from 'next/link'

import { StyledFooter } from '../components/styles/Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
        <p>&copy; Mark Jager</p>
        <span> | </span>
        <Link href="#header">
            <a>Back to top</a>
        </Link>
  </StyledFooter>
  )
}

export default Footer