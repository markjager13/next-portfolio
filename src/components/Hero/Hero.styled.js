import styled from 'styled-components';

export const HeroSection = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 9em 2em;
    padding-top: 12em;

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 9em 2em;
        max-width: 1024px;
        margin: 0 auto;
        padding-top: 9em;

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
    animation-delay: 300ms;
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
    background: ${props => props.theme.colors.accent1};
    padding: 0.25em 1em;
    margin-bottom: 1em;
    
    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fromRight ease 0.65s;
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

    @media ${(props) => props.theme.breakpoints.md} {
        padding-top: 0.25em;
        padding-bottom: 0.25em;
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
        animation-delay: 400ms;
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
    font-family: ${props => props.theme.fonts.main};
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    color: ${props => props.theme.colors.primary1};

    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fromBottom ease 1.25s;
    animation-delay: 500ms;
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

    @media ${(props) => props.theme.breakpoints.md} {
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
        animation-delay: 0;
        animation-fill-mode: forwards;

        a {
            &:focus {
                outline: 3px solid ${(props) => props.theme.colors.primary1};
                outline-offset: 3px;
            }
        }


    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

        &:nth-child(1) {
            animation-delay: 600ms;
        }

        &:nth-child(2) {
            animation-delay: 800ms;
        }

        &:nth-child(3) {
            animation-delay: 1000ms;    
        }

        a {
            font-size: 2.5rem;
            cursor: pointer;
            color: ${(props) => props.theme.colors.social1};
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
