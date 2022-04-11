import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: white;
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