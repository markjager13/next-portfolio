import React from 'react'
import Link from 'next/link'

import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
        <p>&copy; Mark Jager</p>
        <span> | </span>
        <Link href="#top">
            <a>Back to top</a>
        </Link>
  </StyledFooter>
  )
}

export default Footer