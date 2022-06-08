import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${props => props.theme.colors.background1};
        font-family: ${props => props.theme.fonts.main};
        color: ${props => props.theme.colors.primary1};
        font-size: 1.15rem;
        font-weight: 300;
        line-height: 1.6;
        transition: all 0.3s linear;

    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    h1,
    h2,
    h3 {
        font-family: ${props => props.theme.fonts.title};
        margin: 0;
        font-weight: 300;
        line-height: 1;
    }

    h1 {
        font-size: 2.25rem;
        @media ${(props) => props.theme.breakpoints.md} {
            font-size: 3.75rem;
        }
    }
    
    h2 {
        font-size: 2.5rem;
    }
    
    h3 {
        font-size: 1.25rem;
        @media ${(props) => props.theme.breakpoints.md} {
            font-size: 1.5rem;
        }
    }

`;

export default GlobalStyles;