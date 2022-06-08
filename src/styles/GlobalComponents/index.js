import styled from 'styled-components';

export const Section = styled.section`
    padding: 5em 2em;
    max-width: 1024px;
    margin: 0 auto;

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

export const SectionTitle = styled.h2`
    margin-bottom: 0.25em;
`;

export const SectionText = styled.p`
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.primary1};

    @media ${(props) => props.theme.breakpoints.md} {
        font-size: 1.125rem;
    }
`;