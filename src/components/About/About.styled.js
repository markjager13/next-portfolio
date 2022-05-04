import styled from 'styled-components';

export const AboutSection = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 3.5em 2em;

    @media (min-width: 48em) {
        padding: 3.5em 2em;
        max-width: 1024px;
        margin: 0 auto;
        padding-top: 3em;

        display: grid;
        grid-template-columns: 1fr 200px;
        grid-template-areas:
        "title img"
        "subtitle img"
        "text img";
        grid-column-gap: 2em;
    }

    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fadeIn ease 1.25s;
    animation-delay: 1000ms;
    animation-fill-mode: forwards;


    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const AboutTitle = styled.h2`
    margin-bottom: 0.25em;
    grid-area: title;
`;

export const ProfileImg = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0.5em;
    width: 50%;

    img {
        border-radius: 4px;
    }

    @media (min-width: 48em) {

        grid-area: img;
        position: relative;
        z-index: 2;
        width: 100%;

    }
`;

export const AboutText = styled.p`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.primary1};

    opacity: 0;
    animation-duration: 0.6s;
    animation-timing-function: ease-in; 
    animation: fadeIn ease 1.25s;
    animation-delay: 1000ms;
    animation-fill-mode: forwards;


    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.125rem;
    }

`;