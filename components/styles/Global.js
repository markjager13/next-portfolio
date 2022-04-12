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

`;

export default GlobalStyles;