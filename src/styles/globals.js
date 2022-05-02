import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: white;
        font-family: "Source Sans Pro", sans-serif;
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.6;
        color: #303030;
    }

    html {
        scroll-behavior: smooth;
    }

    a {
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    h1,
    h2,
    h3 {
        line-height: 1;
        margin: 0;
        font-weight: 300;
    }

    h1 {
        font-size: 2.25rem;
        @media (min-width: 48em) {
            font-size: 3.75rem;
        }
    }
    
    h2 {
        font-size: 2.5rem;
    }
    
    h3 {
        font-size: 1.25rem;
        @media (min-width: 48em) {
            font-size: 1.5rem;
        }
    }

`;

export default GlobalStyles;