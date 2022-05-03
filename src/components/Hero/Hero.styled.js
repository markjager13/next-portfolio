import styled from 'styled-components';

export const HeroSection = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 8.5em 2em;

    @media (min-width: 48em) {
        padding: 8.5em 2em;
        max-width: 1024px;
        margin: 0 auto;
        padding-top: 8.5em;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
        "title"
        "subtitle"
        "text";
        grid-column-gap: 2em;
    }
`;

export const HeroTitle = styled.h1`
    margin-bottom: 0.25em;
    grid-area: title;

    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fromBottom ease 1.25s;
    animation-delay: 800ms;
    animation-fill-mode: forwards;

    span {
        font-weight: 900;
    }

    @keyframes fromBottom {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

`;

export const HeroSubTitle = styled.div`
    background: #d7f6f6;
    padding: 0.25em 1em;
    margin-bottom: 1em;


    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fromRight ease 1s;
    animation-delay: 0;
    animation-fill-mode: forwards;

    @keyframes fromRight {
        0% {
            opacity: 0;
            transform: translateX(-100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media (min-width: 48em) {
        background: #d7f6f6;
        padding-top: 0.25em;
        padding-bottom: 0.25em;
        font-family: sans-serif;
        margin-bottom: 1em;

        grid-column: 1 / -1;
        grid-row: 2;
        position: relative;
        left: -1em;
        width: calc(100% + 2em);
        padding-left: 1em;
        padding-right: calc(200px + 4em);
    }

    h3 {
        padding: 0.5em;
        opacity: 0;
        animation-duration: 0.6s;
        animation-timing-function: ease-in; 
        animation: fromBottom ease 1.25s;
        animation-delay: 1000ms;
        animation-fill-mode: forwards;

        @keyframes fromBottom {
            0% {
                opacity: 0;
                transform: translateY(100%);
            }
            100% {
                opacity: 1;
                transform: translateY(25%);
            }
        }
    }

`;

export const HeroText = styled.p`
    font-family: "Source Sans Pro",sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    color: #303030;

    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fromBottom ease 1.25s;
    animation-delay: 1400ms;
    animation-fill-mode: forwards;


    @keyframes fromBottom {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (min-width: 48em) {
        font-size: 1.125rem;
    }

`;

export const SocialList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: left;
    margin: 1em 0 0;
    padding: 0;

    li {
        text-decoration: none;
        padding: 0.5em;

        opacity: 0;
        animation-duration: 0.6s;
        animation-timing-function: ease-in; 
        animation: fadeIn ease 1.25s;
        animation-delay: 300ms;
        animation-fill-mode: forwards;


    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

        &:nth-child(1) {
            animation-delay: 2000ms;
        }

        &:nth-child(2) {
            animation-delay: 2200ms;
        }

        &:nth-child(3) {
            animation-delay: 2300ms;    
        }

        a {
            font-size: 2.5rem;
            cursor: pointer;
            color: grey;
            opacity: 1;
            transition-duration: 0.2s; 
        }

        &:hover:nth-child(1) {
            a {
                color: #0077b5; 
            }
        }
        &:hover:nth-child(2) {
            a {
                color: #00405d;
            }
        }
        &:hover:nth-child(3) {
            a {    
                color: #55acee;
            }
        }
    }
`;